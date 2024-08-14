"use client";

import { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";

export type LoadingButtonProps = {
  value: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function LoadingButton({ value, ...buttonProps }: LoadingButtonProps) {
  const fullyLoaded = value >= 100;

  return (
    <div className="flex flex-col gap-[10px] w-[430px]">
      <div className="flex w-full h-[10px] rounded-default bg-dark-button overflow-clip">
        <div
          className="w-full h-full min-h-full bg-primary"
          style={{
            width: `${value}%`,
          }}
        ></div>
      </div>
      <Button
        className="h-20 px-10 rounded-[4px]"
        variant="dark"
        disabled={fullyLoaded}
        {...buttonProps}
      >
        {fullyLoaded ? "Você já viu tudo" : "Carregar Mais"}
      </Button>
    </div>
  );
}
