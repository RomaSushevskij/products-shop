"use client";
import { useMemo } from "react";
import Box from "@mui/material/Box";

import { useGetProductsApi } from "@/entities/products";
import { ProductsTable } from "@/features/products/products-table";
import {
  useProductsFilters,
  ProductsPriceFilter,
  ProductsSidebar,
  ProductsNewFilter,
  defineMinMaxProductsPrices,
  filterProductsByPriceFilter,
  filterProductsByIsNewFilter,
} from "@/features/products/products-sidebar";
import { AddProductToCartBtn } from "@/features/products/add-product-to-cart-btn";

export const ProductsPage = () => {
  const { data: products, loading } = useGetProductsApi();

  const minMaxPrices = useMemo(() => {
    return defineMinMaxProductsPrices(products ?? []);
  }, [products]);

  const { priceFilter, isNewFilter, handleProductsFiltersChange } = useProductsFilters({
    minPrice: minMaxPrices.min,
    maxPrice: minMaxPrices.max,
  });

  const productsFilteredByPriceRange = useMemo(() => {
    return filterProductsByPriceFilter({ products: products ?? [], priceFilter });
  }, [priceFilter, products]);

  const productsFilteredByIsNew = useMemo(() => {
    return filterProductsByIsNewFilter({ products: productsFilteredByPriceRange, isNewFilter });
  }, [isNewFilter, productsFilteredByPriceRange]);

  return (
    <Box sx={{ display: "flex" }}>
      <ProductsSidebar
        isLoading={loading}
        priceFilter={
          <ProductsPriceFilter
            value={priceFilter}
            onChange={(value) => handleProductsFiltersChange("price", value)}
            min={minMaxPrices.min}
            max={minMaxPrices.max}
          />
        }
        isNewFilter={
          <ProductsNewFilter
            value={isNewFilter}
            onChange={(value) => handleProductsFiltersChange("isNew", value)}
          />
        }
      />

      <ProductsTable
        products={productsFilteredByIsNew}
        isLoading={loading}
        renderAddToCartSlot={(product) => <AddProductToCartBtn product={product} />}
      />
    </Box>
  );
};
