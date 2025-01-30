import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "@/components/Button";
import { LeaseBoundaries } from "@/types/lease";

import {
  getLeaseCalculatorFormSchema,
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
  const FormSchema = useMemo(
    () => getLeaseCalculatorFormSchema(leaseBoundaries),
    [leaseBoundaries]
  );
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeaseCalculatorFormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<LeaseCalculatorFormSchemaType> = async (
    data
  ) => {
    setError("");
    setPending(true);
    try {
      await fetchLeaseCalculation(data);
    } catch {
      setError("Oops! Er ging iets mis, probeer het nogmaals");
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
          {...register("brand", {})}
        />
        <LeaseCalculatorFormField
          label="Type"
          placeholder="Bijvoorbeeld XF480"
          error={errors.type?.message}
          className="mb-5"
          {...register("type", {})}
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
          {...register("purchasePrice", {
            valueAsNumber: true,
          })}
        />
      </div>
      <Button type="submit" disabled={pending}>
        Berekening opslaan
      </Button>
      {error && <p className="mt-4 text-red-500 text-xs">{error}</p>}
    </form>
  );
};
