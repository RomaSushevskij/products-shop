import { TProduct } from "@/entities/products";

import { TProductsFilters } from "../model/types";

export const filterProductsByIsNewFilter = ({
  products,
  isNewFilter,
}: {
  products: TProduct[];
  isNewFilter: TProductsFilters["isNew"];
}) => {
  if (!isNewFilter) {
    return products;
  }

  return products.filter((product) => product.isNew);
};
