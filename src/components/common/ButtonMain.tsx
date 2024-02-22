"use client";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { Button, ButtonProps } from "../ui/button";
import clsx from "clsx";

interface IButtonMain extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonChild?: ReactNode;
}

const ButtonMain: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  IButtonMain & ButtonProps
> = ({ buttonChild, variant, className, ...rest }, ref) => {
  return (
    <Button
      className={clsx(
        className,
        variant == "default" &&
          "w-full h-8 bg-gray-950 text-gray-50 hover:bg-gray-600"
      )}
      ref={ref}
      {...rest}
    />
  );
};

export default forwardRef(ButtonMain);
