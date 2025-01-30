import { LeaseCalculationItem } from "../../types";

type Props = {
  item: LeaseCalculationItem;
};

export const LeaseCalculationResult = ({ item }: Props) => {
  return (
    <div>
      <div className="flex text-sm mb-2">
        <strong>{item.title}</strong>{" "}
        <span className="ml-auto">
          <span className="text-secondary font-bold">
            {new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }).format(item?.monthlyPayment ?? 0)}
          </span>{" "}
          /mnd
        </span>
      </div>
      <div className="flex text-xs leading-5  mb-2">
        Aanbetaling{" "}
        <span className="ml-auto">
          {new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
          }).format(item?.downPayment ?? 0)}
        </span>
      </div>
      <div className="flex text-xs leading-5  mb-2">
        Slottermijn{" "}
        <span className="ml-auto">
          {new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
          }).format(item?.balloonPayment ?? 0)}
        </span>
      </div>
      <div className="flex text-xs leading-5  mb-2">
        Looptijd <span className="ml-auto">{item?.tenor} maanden</span>
      </div>
    </div>
  );
};
