import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

export type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ children, ...buttonProps }: BackButtonProps) {
  return (
    <button
      className={cn(
        "bg-dark hover:bg-dark size-14 rounded-full items-center justify-center flex text-center align-middle pt-0.5 text-primary",
        buttonProps.className
      )}
      {...buttonProps}
    >
      <Image
        src="/icon_back_arrow.svg"
        width={33}
        height={33}
        alt="back arrow button"
      />
    </button>
  );
}
