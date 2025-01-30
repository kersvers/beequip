import { HTMLAttributes, PropsWithChildren } from "react";

import { LeaseCalculationItem } from "../../types";
import LeaseCalculationResult from "../LeaseCalculationResult";

type Props = {
  items?: LeaseCalculationItem[];
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

export const LeaseCalculationsList = ({ items, ...props }: Props) => {
  return (
    <div {...props}>
      <h3 className="font-bold text-lg mb-6">Bewaarde berekeningen</h3>
      {items && items.length > 0 ? (
        items?.map((item, index) => (
          <LeaseCalculationResult item={item} key={`${item.title}-${index}`} />
        ))
      ) : (
        <p className="text-xs">Nog geen berekeningen opgeslagen</p>
      )}
    </div>
  );
};
