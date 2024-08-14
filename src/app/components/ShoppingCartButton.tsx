"use client";
import Image from "next/image";

export function ShoppingCartButton() {
  return (
    <div className="flex items-center justify-center gap-1">
      <Image
        src="icon_shopping_cart.svg"
        alt="Shopping cart symbol"
        width={33}
        height={33}
      />
      <span className="mt-1">0</span>
    </div>
  );
}
