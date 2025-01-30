import classNames from "classnames";
import { InputHTMLAttributes, forwardRef } from "react";

type Props = {
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, Props>(
  ({ disabled, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={classNames(
        "rounded border px-3 py-2 text-sm bg-gray-200",
        "focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-gray-300",
        {
          "border-red-300 focus:ring-red-300": hasError,
          "bg-gray-50 text-gray-500": disabled,
        }
      )}
      {...props}
    />
  )
);

InputField.displayName = "InputField";
