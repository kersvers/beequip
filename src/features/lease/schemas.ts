import { z } from "zod";

import { LeaseBoundaries } from "@/types/lease";

export const getLeaseCalculatorFormSchema = (boundaries: LeaseBoundaries) => {
  return z.object({
    brand: z.string().min(1, "Merk is verplicht"),
    type: z.string().min(1, "Type is verplicht"),
    year: z.number({
      required_error: "Bouwjaar is verplicht",
      invalid_type_error: "Bouwjaar is verplicht",
    })
      .min(boundaries.objectYear.min, { message: `Bouwjaar moet hoger zijn dan ${boundaries.objectYear.min}` })
      .max(boundaries.objectYear.max, { message: `Bouwjaar moet lager zijn dan ${boundaries.objectYear.max}` }),
    purchasePrice: z.number({
      required_error: "Aanschafwaarde is verplicht",
      invalid_type_error: "Aanschafwaarde is verplicht",
    })
      .min(boundaries.purchasePrice.min, { message: `Aanschafwaarde moet hoger zijn dan ${boundaries.purchasePrice.min}` })
      .max(boundaries.purchasePrice.max, { message: `Aanschafwaarde moet lager zijn dan ${boundaries.purchasePrice.max}` }),
  })
};

export type LeaseCalculatorFormSchemaType = z.infer<ReturnType<typeof getLeaseCalculatorFormSchema>>;