import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "@/components/Button";
import { LeaseBoundaries } from "@/types/lease";

import {
  LeaseCalculatorFormSchema,
  LeaseCalculatorFormSchemaType,
} from "../../schemas";
import { LeaseCalculationInput } from "../../types";
import LeaseCalculatorFormField from "../LeaseCalculatorFormField";

type Props = {
  fetchLeaseCalculation: (data: LeaseCalculationInput) => Promise<void>;
  leaseBoundaries: LeaseBoundaries;
} & HTMLAttributes<HTMLFormElement>;

export const LeaseCalculatorForm = ({
  fetchLeaseCalculation,
  leaseBoundaries,
  ...props
}: Props) => {
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaseCalculatorFormSchemaType>({
    resolver: zodResolver(LeaseCalculatorFormSchema),
  });

  const onSubmit: SubmitHandler<LeaseCalculatorFormSchemaType> = async (
    data
  ) => {
    setPending(true);
    try {
      await fetchLeaseCalculation(data);
    } catch (error) {
      console.log(error);
    }
    setPending(false);
  };

  const formatPrice = (price?: number) => {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price ?? 0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <div className="flex gap-6">
        <LeaseCalculatorFormField
          label="Merk"
          placeholder="Bijvoorbeeld DAF"
          error={errors.brand?.message}
          className="mb-5"
          {...register("brand")}
        />
        <LeaseCalculatorFormField
          label="Type"
          placeholder="Bijvoorbeeld XF480"
          error={errors.type?.message}
          className="mb-5"
          {...register("type")}
        />
      </div>
      <div className="flex gap-6">
        <LeaseCalculatorFormField
          label="Bouwjaar"
          placeholder="Bijvoorbeeld 2021"
          error={errors.year?.message}
          type="number"
          helperText={`Tussen ${leaseBoundaries.objectYear.min} en ${leaseBoundaries.objectYear.max}`}
          className="mb-5"
          min={leaseBoundaries.objectYear.min}
          max={leaseBoundaries.objectYear.max}
          {...register("year", {
            valueAsNumber: true,
          })}
        />
        <LeaseCalculatorFormField
          label="Aanschafwaarde"
          placeholder="Bijvoorbeeld 50000"
          error={errors.purchasePrice?.message}
          type="number"
          helperText={`Tussen ${formatPrice(
            leaseBoundaries.purchasePrice.min
          )} en ${formatPrice(leaseBoundaries.purchasePrice.max)}`}
          className="mb-5"
          min={leaseBoundaries.purchasePrice.min}
          max={leaseBoundaries.purchasePrice.max}
          {...register("purchasePrice", {
            valueAsNumber: true,
          })}
        />
      </div>
      <Button type="submit" disabled={pending}>
        Berekening opslaan
      </Button>
    </form>
  );
};
