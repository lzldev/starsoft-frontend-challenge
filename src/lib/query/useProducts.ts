import { useInfiniteQuery } from "@tanstack/react-query";
import { zFetch } from "../fetch";
import { GetProductsSchema } from "../schema/pagination";

export const productsKey = () => ["GET_PRODUCTS"];

export function useProducts() {
  return useInfiniteQuery({
    queryKey: productsKey(),
    queryFn: ({ pageParam }) =>
      zFetch(
        `/products?page=${pageParam.page}&limit=${pageParam.limit}`,
        GetProductsSchema
      ),
    initialPageParam: { page: 1, limit: 20 },
    getNextPageParam: (lastPage) => {
      if (!lastPage.metadata.hasNextPage) {
        return null;
      }

      return {
        page: lastPage.metadata.page + 1,
        limit: lastPage.metadata.limit,
      };
    },
  });
}
