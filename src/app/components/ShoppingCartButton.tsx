"use client";
import { showCart } from "@/lib/features/shoppingCartSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";

export function ShoppingCartButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex items-center justify-center gap-1 p-2 select-none rounded-default hover:bg-dark "
      onClick={() => dispatch(showCart())}
    >
      <Image
        src="icon_shopping_cart.svg"
        alt="Shopping cart symbol"
        width={33}
        height={33}
      />
      <span className="mt-1">0</span>
    </button>
  );
}
