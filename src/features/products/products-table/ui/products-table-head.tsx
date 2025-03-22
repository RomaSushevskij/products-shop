import { MouseEvent } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

import { TProduct } from "@/entities/products";

import { TOrder, TProductsTableHeadCell, TProductsTableSortedFields } from "../model/types";
import { headCells } from "../model/constants";

export const ProductsTableHead = ({
  order,
  orderBy,
  onRequestSort,
}: {
  onRequestSort: (event: MouseEvent<unknown>, property: TProductsTableSortedFields) => void;
  order: TOrder;
  orderBy: TProductsTableSortedFields | null;
}) => {
  const createSortHandler =
    (property: TProductsTableSortedFields) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const isOrderIndicatorDisplay = (name: keyof TProduct) => {
    return orderBy === name;
  };

  const renderSortedTableCell = ({ name, label }: TProductsTableHeadCell) => {
    return (
      <TableCell key={name} sortDirection={orderBy === name ? order : false}>
        <TableSortLabel
          active={orderBy === name}
          direction={orderBy === name ? order : "asc"}
          onClick={createSortHandler(name as TProductsTableSortedFields)}
        >
          {label}

          {isOrderIndicatorDisplay(name) && (
            <Box component="span" sx={visuallyHidden}>
              {order === "desc" ? "sorted descending" : "sorted ascending"}
            </Box>
          )}
        </TableSortLabel>
      </TableCell>
    );
  };

  const renderUnsortedTableCell = ({ name, label }: TProductsTableHeadCell) => {
    return (
      <TableCell key={name} sortDirection={orderBy === name ? order : false}>
        {label}
      </TableCell>
    );
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => {
          if (headCell.sorted) {
            return renderSortedTableCell(headCell);
          }

          return renderUnsortedTableCell(headCell);
        })}
      </TableRow>
    </TableHead>
  );
};
