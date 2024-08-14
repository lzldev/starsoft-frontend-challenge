import { cn } from "@/lib/cn";
import Image from "next/image";

export type CartCounterProps = {
  className?: string;
  value: number;
  onIncrement: (count: number) => any;
  onDecrement: (count: number) => any;
};

export function CartCounter({
  value,
  onDecrement,
  onIncrement,
  className,
}: CartCounterProps) {
  return (
    <div
      className={cn(
        "flex rounded-default items-center justify-center bg-darker overflow-clip select-none w-[115px] h-[49px]",
        className
      )}
    >
      <button
        className="flex flex-1 h-full hover:bg-dark justify-center items-center text-center"
        onClick={() => {
          onDecrement(value === 1 ? 0 : value - 1);
        }}
      >
        <Image src="/icon_minus.svg" height={16} width={16} alt="add icon" />
      </button>
      <div className="flex flex-1 flex-grow justify-center text-xss font-semibold">
        {value}
      </div>
      <button
        className="flex flex-1 h-full hover:bg-dark justify-center items-center text-center"
        onClick={() => {
          onIncrement(value + 1);
        }}
      >
        <Image src="/icon_add.svg" height={16} width={16} alt="add icon" />
      </button>
    </div>
  );
}
