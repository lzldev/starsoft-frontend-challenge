import Image from "next/image";
import { ETHPrice } from "../products/ETHPrice";
import { Button } from "../components/Button";
import { CartCounter } from "./CartCounter";

export function ShoppingCartItem() {
  return (
    <div className="h-[200px] w-full bg-cart-item-background rounded-default gap-x-8 flex py-4 px-7">
      <div>
        <Image
          className="rounded-default"
          src="https://softstar.s3.amazonaws.com/items/backpack.png"
          alt="Product Image"
          width={161}
          height={161}
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex-col flex flex-1">
          <span className="text-xl font-medium text-white">Name</span>
          <span className="overflow-hidden break-all align-top text-xxs font-lighter text-ellipsis line-clamp-1">
            Redesigned from scratch and completely revised.
          </span>
        </div>
        <ETHPrice price={12} />
        <div className="flex w-full justify-between pt-2">
          <CartCounter
            value={0}
            onDecrement={(count) => {}}
            onIncrement={(count) => {}}
          />
          <Button className="rounded-full p-0 size-12 items-center justify-center flex">
            <Image
              src={"/icon_delete.svg"}
              width={26}
              height={26}
              alt="trash can icon"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
