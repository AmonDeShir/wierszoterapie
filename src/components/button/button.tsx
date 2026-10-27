import { forwardRef, type ComponentPropsWithoutRef } from "react";

type ButtonSize = {
  bigger?: boolean;
  medium?: boolean;
};

const baseClasses =
  "relative z-0 mt-2.5 ml-auto flex h-10 cursor-pointer items-center justify-center text-center font-ui text-sm text-secondary no-underline [transition:scale_0.25s,color_0.5s,background-color_0.5s,border-color_0.5s] before:absolute before:inset-0 before:-z-10 before:rounded-full before:border-2 before:border-solid before:bg-primary before:content-[''] before:[transition:scale_0.25s,color_0.5s,background-color_0.5s,border-color_0.5s] hover:scale-90 hover:border-primary hover:text-primary hover:before:scale-90 hover:before:border-primary active:scale-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:before:transition-none";

const sizeClasses = ({ bigger, medium }: ButtonSize) =>
  bigger ? "w-56" : medium ? "w-40" : "w-32";

export const Button = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & ButtonSize
>(({ bigger, medium, className = "", ...props }, ref) => (
  <a
    {...props}
    ref={ref}
    className={`${baseClasses} ${sizeClasses({ bigger, medium })} before:border-transparent hover:bg-transparent hover:before:bg-transparent ${className}`}
  />
));

export const SubmitButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button"> & Pick<ButtonSize, "bigger">
>(({ bigger, className = "", ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${baseClasses} ${sizeClasses({ bigger })} border-0 bg-transparent before:border-secondary hover:bg-secondary hover:before:bg-secondary ${className}`}
  />
));

Button.displayName = "Button";
SubmitButton.displayName = "SubmitButton";
