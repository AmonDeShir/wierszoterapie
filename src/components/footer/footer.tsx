import { type ComponentPropsWithoutRef } from "react";

export const Footer = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"footer">) => (
  <footer
    {...props}
    className={`flex h-25 w-full shrink-0 flex-col items-center justify-center bg-dark text-center font-ui text-2xs font-normal leading-normal text-secondary ${className}`}
  />
);
