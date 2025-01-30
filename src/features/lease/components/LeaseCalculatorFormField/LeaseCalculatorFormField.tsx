import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

import InputField from "@/components/InputField";
import Label from "@/components/Label";

import { LeaseCalculatorFormSchemaType } from "../../schemas";

type FormFieldProps = {
  label?: string;
  helperText?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  ReturnType<UseFormRegister<LeaseCalculatorFormSchemaType>>;

export const LeaseCalculatorFormField = forwardRef<
  HTMLInputElement,
  FormFieldProps
>(({ label, helperText, className, error, ...props }, ref) => {
  return (
    <div className={classNames("w-full", className)}>
      <Label text={label}>
        <InputField ref={ref} hasError={error !== undefined} {...props} />
      </Label>
      {error && <span className=" text-red-500 text-xs">{error}</span>}
      {helperText && !error && (
        <span className=" text-gray-100 text-xs">{helperText}</span>
      )}
    </div>
  );
});

LeaseCalculatorFormField.displayName = "LeaseCalculatorFormField";
