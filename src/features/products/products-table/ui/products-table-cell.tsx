import { PropsWithChildren } from "react";

import TableCell from "@mui/material/TableCell";
import Skeleton from "@mui/material/Skeleton";

export const ProductsTableCell = ({
  children,
  isLoading,
}: PropsWithChildren<{ isLoading?: boolean }>) => {
  return <TableCell>{isLoading ? <Skeleton /> : children}</TableCell>;
};
