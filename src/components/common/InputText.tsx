import { AlertCircleIcon } from "lucide-react";
import React, { InputHTMLAttributes, forwardRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputDefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputText: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputDefaultProps
> = ({ label, error, id, type = "text", ...rest }, ref) => {
  return (
    <>
      <div className="grid w-full items-center gap-x-1 gap-y-0.5">
        {label ? (
          <Label
            className="pl-1 text-xs font-semibold text-zinc-800"
            htmlFor={id}
          >
            {label}
          </Label>
        ) : null}

        <Input {...rest} type={type} ref={ref} className="h-8 w-full" />
        {error ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <AlertCircleIcon className="h-5 w-5 text-red-500" />
          </div>
        ) : null}
      </div>
    </>
  );
};

InputText.displayName = "InputText";

export default forwardRef(InputText);
