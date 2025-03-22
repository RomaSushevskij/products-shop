import { TProduct } from "@/entities/products";

export type TProductsTableHeadCell = {
  name: keyof TProduct;
  label: string;
  sorted: boolean;
};

export type TProductsTableSortedFields = keyof Pick<TProduct, "price" | "title">;

export type TOrder = "asc" | "desc";
