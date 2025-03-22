"use client";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  ProductCard,
  ProductCardSkeleton,
  TProduct,
  useGetProductByIdApi,
} from "@/entities/products";
import { AddProductToCartBtn } from "@/features/products/add-product-to-cart-btn";

export const ProductPage = ({ productId }: { productId: TProduct["id"] }) => {
  const { back } = useRouter();
  const { data, loading } = useGetProductByIdApi(productId);

  const product = data?.[0];

  if (loading) {
    return (
      <Stack flexDirection={"column"} alignItems={"start"} gap={4}>
        <Button startIcon={<ArrowBackIcon />} onClick={back}>
          Back
        </Button>
        <ProductCardSkeleton />
      </Stack>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <Stack flexDirection={"column"} alignItems={"start"} gap={4}>
      <Button startIcon={<ArrowBackIcon />} onClick={back}>
        Back
      </Button>
      <ProductCard
        product={product}
        addToCardSlot={<AddProductToCartBtn product={product} variant={"contained"} />}
      />
    </Stack>
  );
};
