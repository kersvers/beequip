// import styles from "./Label.module.scss";

import { HTMLAttributes, PropsWithChildren } from "react";

type Props = {
  text?: string;
} & PropsWithChildren &
  HTMLAttributes<HTMLLabelElement>;

export const Label = ({ text, children, ...props }: Props) => {
  if (!text) {
    return children;
  }

  return (
    <label className="flex flex-col gap-2" {...props}>
      <span className="text-sm font-medium text-gray-300">{text}</span>
      {children}
    </label>
  );
};
