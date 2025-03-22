import { ChangeEvent, MouseEvent, ReactElement, useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";

import { TProduct } from "@/entities/products";
import { formatToCurrency } from "@/shared/lib/format-to-currency";

import { TOrder, TProductsTableSortedFields } from "../model/types";
import { getComparator } from "../lib/get-comparator";
import { ProductsTableHead } from "./products-table-head";
import { ProductsTableCell } from "./products-table-cell";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";

export const ProductsTable = ({
  products,
  isLoading,
  renderAddToCartSlot,
}: {
  products: TProduct[];
  isLoading?: boolean;
  renderAddToCartSlot: (product: TProduct) => ReactElement;
}) => {
  const [order, setOrder] = useState<TOrder>("asc");
  const [orderBy, setOrderBy] = useState<keyof Pick<TProduct, "title" | "price"> | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { push } = useRouter();

  const skeletonProductsData = useMemo<number[]>(
    () => new Array(rowsPerPage).fill(0).map((item, index) => item + index),
    [rowsPerPage],
  );

  const handleRequestSort = (_: MouseEvent<unknown>, property: TProductsTableSortedFields) => {
    if (orderBy !== property || orderBy === null) {
      setOrder("asc");
      setOrderBy(property);
      setPage(0);

      return;
    }

    if (order === "desc") {
      setOrderBy(null);
      setPage(0);

      return;
    }

    if (order === "asc") {
      setOrder("desc");
      setOrderBy(property);
      setPage(0);

      return;
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (productId: TProduct["id"]) => () => {
    push(`/products/${productId}`);
  };

  const visibleRows = useMemo(() => {
    if (orderBy === null) {
      return products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return [...products]
      .sort(getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage, products]);

  const renderSkeletonTableCell = skeletonProductsData.map((item) => {
    return (
      <TableRow key={item}>
        <ProductsTableCell isLoading={isLoading} />
        <ProductsTableCell isLoading={isLoading} />
        <ProductsTableCell isLoading={isLoading} />
        <ProductsTableCell isLoading={isLoading} />
      </TableRow>
    );
  });

  const renderTableCell = visibleRows.map((row) => {
    return (
      <TableRow key={row.id} hover sx={{ cursor: "pointer" }} onClick={handleRowClick(row.id)}>
        <ProductsTableCell>{row.title}</ProductsTableCell>
        <ProductsTableCell>{row.brand}</ProductsTableCell>
        <ProductsTableCell>{formatToCurrency(row.price, "EUR")}</ProductsTableCell>
        <ProductsTableCell>{renderAddToCartSlot(row)}</ProductsTableCell>
      </TableRow>
    );
  });

  if (!visibleRows.length && !isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <Typography>Ничего не найдено</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <ProductsTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>{isLoading ? renderSkeletonTableCell : renderTableCell}</TableBody>
          </Table>
        </TableContainer>

        {!isLoading && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  );
};
