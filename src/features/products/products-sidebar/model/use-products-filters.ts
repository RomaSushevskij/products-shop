import { useLayoutEffect, useState } from "react";

import { TProductsFilters } from "./types";

export const useProductsFilters = ({
  minPrice,
  maxPrice,
}: {
  minPrice: number;
  maxPrice: number;
}) => {
  const [priceFilter, setPriceFilter] = useState<TProductsFilters["price"]>({
    from: minPrice ?? 0,
    to: maxPrice ?? 0,
  });
  const [isNewFilter, setIsNewFilter] = useState<TProductsFilters["isNew"]>(false);

  const handleProductsFiltersChange = <Filter extends keyof TProductsFilters>(
    filter: Filter,
    value: TProductsFilters[Filter],
  ) => {
    if (filter === "isNew" && typeof value === "boolean") {
      setIsNewFilter(value);

      return;
    }

    if (filter === "price" && typeof value !== "boolean") {
      setPriceFilter(value);
    }
  };

  useLayoutEffect(() => {
    if (!minPrice || !maxPrice) return;

    setPriceFilter({ from: minPrice, to: maxPrice });
  }, [minPrice, maxPrice]);

  return { priceFilter, isNewFilter, handleProductsFiltersChange };
};
