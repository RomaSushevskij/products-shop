import { TProduct } from "@/entities/products";

import { TOrder } from "../model/types";
import { descendingComparator } from "./descending-comparator";

export function getComparator<Key extends keyof Pick<TProduct, "title" | "price">>(
  order: TOrder,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
