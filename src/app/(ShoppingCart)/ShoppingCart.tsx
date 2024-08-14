"use client";

import { selectShowCart } from "@/lib/features/shoppingCartSlice";
import { useAppSelector } from "@/lib/hooks";
import { Button } from "../components/Button";
import { ETHPrice } from "../(products)/ETHPrice";

export function ShoppingCart() {
  const show = useAppSelector(selectShowCart);

  console.log(show);

  if (!show) {
    return <></>;
  }

  return (
    <div className="w-full md:w-[30%] min-h-screen fixed bg-dark z-10 overflow-hidden md:left-0 flex flex-col p-8">
      <div className="flex gap-4">
        <div>{"<"}</div>
        <span className="flex w-full text-justify">Mochila de Compras</span>
      </div>
      <div className="flex flex-1 flex-grow overflow-y-auto"></div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-4 py-6">
          <span className="text-xl font-bold">TOTAL</span>
          <ETHPrice price={44} />
        </div>
        <Button className="w-full">Comprar</Button>
      </div>
    </div>
  );
}
