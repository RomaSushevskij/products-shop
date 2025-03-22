import { TProductsTableHeadCell } from "./types";

export const headCells: readonly TProductsTableHeadCell[] = [
  { name: "title", label: "Название", sorted: true },
  { name: "brand", label: "Бренд", sorted: false },
  { name: "price", label: "Стоимость", sorted: true },
  { name: "id", label: "", sorted: false },
];
