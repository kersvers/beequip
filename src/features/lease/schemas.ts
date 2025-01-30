import { z } from "zod";

export const LeaseCalculatorFormSchema = z.object({
  brand: z.string().min(1, "Merk is verplicht"),
  type: z.string().min(1, "Type is verplicht"),
  year: z.number({
    required_error: "Bouwjaar is verplicht",
    invalid_type_error: "Bouwjaar is verplicht",
  }),
  purchasePrice: z.number({
    required_error: "Aanschafwaarde is verplicht",
    invalid_type_error: "Aanschafwaarde is verplicht",
  }),
});

export type LeaseCalculatorFormSchemaType = z.infer<typeof LeaseCalculatorFormSchema>;