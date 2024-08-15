"use client";

import {
  clearCart,
  hideCart,
  selectProducts,
  selectShowCart,
  selectTotal,
} from "@/lib/features/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "../components/Button";
import { ETHPrice } from "../products/ETHPrice";
import { BackButton } from "../components/BackButton";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { useFakeMutation } from "@/lib/mutation/useFakeMutation";

/*
  Keeps component from re-rendering when not shown
*/
export function ShoppingCart() {
  const show = useAppSelector(selectShowCart);

  if (!show) {
    return <></>;
  }

  return <ShoppingCartInner />;
}

function ShoppingCartInner() {
  const dispatch = useAppDispatch();
  const products = Object.values(useAppSelector(selectProducts));
  const total = useAppSelector(selectTotal);

  const { mutate, isPending, isSuccess } = useFakeMutation(1000, {
    onSuccess: () => dispatch(clearCart()),
  });

  return (
    <div className="w-full min-[800px]:w-[690px] h-screen fixed bg-background z-10 overflow-hidden min-[800px]:left-0 flex flex-col p-8 shadow-lg shadow-black">
      <div className="flex items-center gap-4 pb-6">
        <BackButton onClick={() => dispatch(hideCart())} />
        <span
          className="flex items-center justify-center flex-grow font-medium text-2xl"
          flex-1
        >
          Mochila de Compras
        </span>
      </div>
      <div className="flex flex-grow overflow-y-auto flex-col gap-y-16 px-2">
        {products.map((product, i) => (
          <ShoppingCartItem key={i} entry={product} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-4 py-6">
          <span className="text-xl font-bold">TOTAL</span>
          <ETHPrice price={total} />
        </div>
        <Button
          className="w-full"
          disabled={isPending || isSuccess}
          onClick={() => mutate()}
        >
          {isPending
            ? "PROCESSSANDO A COMPRA..."
            : isSuccess
            ? "COMPRA FINALIZADA"
            : "FINALIZAR COMPRA"}
        </Button>
      </div>
    </div>
  );
}
