import Image from "next/image";
import { ShoppingCartButton } from "./ShoppingCartButton";
export type NavbarProps = {};

export function Navbar(_: NavbarProps) {
  return (
    <div className="flex items-center justify-center w-full h-24 border-b-1 border-opacity-20 border-b-white">
      <div className="flex justify-between flex-1 px-12 py-6 max-w-screen-2xl">
        <Image
          src="/logo_starsoft.svg"
          alt="Starsoft logo"
          width={101}
          height={38}
          priority
        />
        <ShoppingCartButton />
      </div>
    </div>
  );
}
