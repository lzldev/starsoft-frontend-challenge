"use client";

import { hideCart, selectShowCart } from "@/lib/features/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "../components/Button";
import { ETHPrice } from "../products/ETHPrice";
import { BackButton } from "../components/BackButton";
import { ShoppingCartItem } from "./ShoppingCarItem";

export function ShoppingCart() {
  const show = useAppSelector(selectShowCart);
  const dispatch = useAppDispatch();

  const products = ["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"];

  if (!show) {
    return <></>;
  }

  return (
    <div className="w-full min-[800px]:w-[690px] h-screen max-h-screen min-h-screen fixed bg-dark z-10 overflow-hidden min-[800px]:left-0 flex flex-col p-8">
      <div className="flex items-center gap-4">
        <BackButton onClick={() => dispatch(hideCart())} />
        <span className="flex items-center justify-center flex-grow" flex-1>
          Mochila de Compras
        </span>
      </div>
      <div className="flex flex-grow overflow-y-scroll flex-col gap-y-16">
        {products.map((_, i) => (
          <ShoppingCartItem key={i} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-4 py-6">
          <span className="text-xl font-bold">TOTAL</span>
          <ETHPrice price={44} />
        </div>
        <Button className="w-full">Finalizar Compra</Button>
      </div>
    </div>
  );
}
