import Image from "next/image";
import { ETHPrice } from "./ETHPrice";
import { Button } from "../components/Button";
import { Product } from "@/lib/schema/product";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addProduct, selectProducts } from "@/lib/features/shoppingCartSlice";
import { createSelector } from "@reduxjs/toolkit";

export type ProductCardProps = {
  product: Product;
};

const selectAdded = createSelector(
  [selectProducts, (_, id: number) => id],
  (products, productId) => !!products[productId]
);

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const added = useAppSelector((s) => selectAdded(s, product.id));

  return (
    <div className="w-[345px] h-[555px]  bg-darker flex flex-col items-center justify-center gap-12 p-7 rounded-default">
      <div className="flex items-center justify-center">
        <Image
          className="rounded-default"
          src={product.image}
          alt="Product Image"
          width={296}
          height={296}
        />
      </div>
      <div className="flex flex-col items-center justify-between flex-1 w-full gap-5">
        <div className="*-[span]:w-full flex flex-col w-full">
          <span className="text-xl font-medium text-white">{product.name}</span>
          <span className="overflow-hidden break-all align-top text-xxs font-lighter text-ellipsis line-clamp-1">
            {product.description}
          </span>
        </div>
        <div className="flex flex-col justify-between flex-1 w-full gap-2">
          <ETHPrice price={product.price} />
          <Button
            variant={added ? "primary" : "dark"}
            className="flex-1"
            disabled={added}
            onClick={() => {
              if (added) {
                return;
              }
              dispatch(addProduct(product));
            }}
          >
            {added ? "ADICIONADO AO CARRINHO" : "COMPRAR"}
          </Button>
        </div>
      </div>
    </div>
  );
}
