import { useApi } from "@/shared/api";

import { TProduct } from "../model/types";

export const useGetProductsApi = () => {
  return useApi<TProduct[]>("/products");
};
