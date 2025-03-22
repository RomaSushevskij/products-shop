import { useApi } from "@/shared/api";

import { TProduct } from "../model/types";

export const useGetProductByIdApi = (productId: TProduct["id"]) => {
  return useApi<[TProduct]>(`/products?id=${productId}`);
};
