"use client";

import { LoadingButton } from "../components/LoadingButton";
import { ProductCard } from "./ProductCard";

export function Products() {
  /// TODO: Query Api
  const products = [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];

  return (
    <div className="flex flex-col items-center flex-1 w-full h-full pt-8">
      <div className="grid content-center max-w-full grid-flow-row-dense gap-6 min-[717px]:grid-cols-2 min-[1323px]:grid-cols-4 justify-items-center">
        {products.map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full py-20">
        <LoadingButton value={45} />
      </div>
    </div>
  );
}
