import { forwardRef, type ComponentPropsWithoutRef } from "react";

type PoemContainerProps = ComponentPropsWithoutRef<"article"> & {
  noAbsolute?: boolean;
};

export const PoemContainer = forwardRef<HTMLElement, PoemContainerProps>(
  ({ noAbsolute, className = "", ...props }, ref) => (
    <article
      {...props}
      ref={ref}
      className={`inset-0 flex flex-col items-center justify-center ${noAbsolute ? "static z-1" : "absolute -z-2"} ${className}`}
    />
  ),
);

PoemContainer.displayName = "PoemContainer";
