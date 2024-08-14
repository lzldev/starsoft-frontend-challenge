import Image from "next/image";
import { ETHPrice } from "../products/ETHPrice";
import { Button } from "../components/Button";
import { CartCounter } from "./CartCounter";
import {
  addProduct,
  CartEntry,
  removeProduct,
} from "@/lib/features/shoppingCartSlice";
import { useAppDispatch } from "@/lib/hooks";

export type ShoppingCartItemProps = {
  entry: CartEntry;
};

export function ShoppingCartItem({
  entry: { product, count },
}: ShoppingCartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="h-[200px] w-full bg-cart-item-background rounded-default gap-x-8 flex py-4 px-7 justify-center items-center">
      <div>
        <Image
          className="rounded-default"
          src={product.image}
          alt="Product Image"
          width={161}
          height={161}
        />
      </div>
      <div className="flex flex-col flex-1 h-full">
        <div className="flex-col flex flex-grow">
          <span className="text-xl font-medium text-white">{product.name}</span>
          <span className="overflow-hidden break-all align-top text-xxs font-lighter text-ellipsis line-clamp-3">
            {product.description}
          </span>
        </div>
        <ETHPrice price={product.price} />
        <div className="flex w-full justify-between pt-2">
          <CartCounter
            value={count}
            onDecrement={() =>
              dispatch(removeProduct({ id: product.id, count: 1 }))
            }
            onIncrement={() => dispatch(addProduct(product))}
          />
          <Button
            className="rounded-full p-0 size-12 items-center justify-center flex"
            onClick={() => {
              dispatch(
                removeProduct({
                  id: product.id,
                  count: count + 1,
                })
              );
            }}
          >
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
