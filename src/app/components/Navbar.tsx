import Image from "next/image";
import { ShoppingCartButton } from "./ShoppingCartButton";
export type NavbarProps = {};

export function Navbar(_: NavbarProps) {
  return (
    <div className="flex items-center justify-between w-full px-12 py-6 border-b-1 border-opacity-5 border-b-light">
      <Image
        src="/logo_starsoft.svg"
        alt="Starsoft logo"
        width={101}
        height={38}
        priority
      />
      <ShoppingCartButton />
    </div>
  );
}
