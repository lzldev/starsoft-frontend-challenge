"use client";

import { useProducts } from "@/lib/query/useProducts";
import { LoadingButton } from "../components/LoadingButton";
import { ProductCard } from "./ProductCard";

export function Products() {
  const { data, isLoading, fetchNextPage, ...rest } = useProducts();
  console.log(rest);

  const lastPage = data?.pages.at(-1);
  if (isLoading || !lastPage) {
    return;
  }

  const progress = Math.floor(
    (lastPage?.metadata?.page / lastPage?.metadata?.pageCount) * 100
  );

  return (
    <div className="flex flex-col items-center flex-1 w-full h-full pt-8">
      <div className="grid content-center max-w-full grid-flow-row-dense gap-6 min-[717px]:grid-cols-2 min-[1323px]:grid-cols-4 justify-items-center">
        {!isLoading &&
          data?.pages.map((p) =>
            p.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
      </div>
      <div className="flex items-center justify-center w-full py-20">
        <LoadingButton
          value={progress}
          onClick={() => {
            console.log("a");
            fetchNextPage();
          }}
        />
      </div>
    </div>
  );
}
