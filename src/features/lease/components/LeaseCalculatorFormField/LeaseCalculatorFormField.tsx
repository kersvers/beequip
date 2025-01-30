import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import type * as z from "zod";

import InputField from "@/components/InputField";
import Label from "@/components/Label";

import { LeaseCalculatorFormSchema } from "../../schemas";

type FormFieldProps = {
  label?: string;
  helperText?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  ReturnType<UseFormRegister<z.infer<typeof LeaseCalculatorFormSchema>>>;

export const LeaseCalculatorFormField = forwardRef<
  HTMLInputElement,
  FormFieldProps
>(({ label, helperText, className, error, ...props }, ref) => {
  return (
    <div className={classNames("w-full", className)}>
      <Label text={label}>
        <InputField ref={ref} hasError={error !== undefined} {...props} />
      </Label>
      {helperText && (
        <span className=" text-gray-100 text-xs">{helperText}</span>
      )}
    </div>
  );
});

LeaseCalculatorFormField.displayName = "LeaseCalculatorFormField";
