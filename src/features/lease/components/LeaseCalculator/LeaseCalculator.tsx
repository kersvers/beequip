import { PropsWithChildren, HTMLAttributes } from "react";

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export const LeaseCalculator = ({ children, ...props }: Props) => (
  <div {...props}>{children}</div>
);
