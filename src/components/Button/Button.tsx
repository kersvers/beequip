import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Props = {
  variant?: "primary" | "secondary" | "destructive";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "py-2 px-4 rounded text-[14px] drop-shadow",
          "disabled:opacity-50",
          {
            "bg-primary text-white": variant === "primary",
          }
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
