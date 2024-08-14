import Image from "next/image";

export type ETHPriceProps = { price: number };

export function ETHPrice({ price }: ETHPriceProps) {
  return (
    <div className="flex items-center text-sm font-semibold gap-x-1">
      <Image src="/logo_eth.svg" width={29} height={29} alt="Ethereum Logo" />
      <span>{price} ETH</span>
    </div>
  );
}
