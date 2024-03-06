"use client";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { Button, ButtonProps } from "../ui/button";
import { Link } from "lucide-react";

interface IButtonMain extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonChild?: ReactNode;
  href: string;
}

const ButtonLink: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  IButtonMain & ButtonProps
> = ({ buttonChild, href, ...rest }, ref) => {
  return (
    <>
      <Button asChild ref={ref} {...rest}>
        <Link href={href}>{buttonChild}</Link>
      </Button>
    </>
  );
};

export default forwardRef(ButtonLink);
