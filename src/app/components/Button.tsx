import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "primary" | "dark";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  children,
  ...htmlButtonProps
}: ButtonProps) {
  const backgroundVariantClass = cn(
    variant === "primary"
      ? "bg-primary"
      : variant === "dark"
      ? "bg-dark-button"
      : "bg-primary"
  );
  return (
    <button
      className={cn(
        backgroundVariantClass,
        "px-[26px] py-[10px] rounded-default text-lighter font-semibold",
        htmlButtonProps.className
      )}
    >
      {children}
    </button>
  );
}
