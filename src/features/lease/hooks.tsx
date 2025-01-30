import { useState, useCallback } from "react";

import { fetchLeaseCalculation as fetchLeaseCalculationFromApi } from "@/services/api";

import { LeaseCalculationItem, LeaseCalculationInput } from "./types";

export const useLeaseCalculator = () => {
  const [savedItems, setSavedItems] = useState<LeaseCalculationItem[]>([]);

  const fetchLeaseCalculation = useCallback(
    async (item: LeaseCalculationInput): Promise<void> => {
      const { brand, type, purchasePrice, year } = item;
      const {
        data: { leaseCalculation },
      } = await fetchLeaseCalculationFromApi({
        object: {
          brand,
          type,
          year,
        },
        purchasePrice,
      });

      const { balloonPayment, downPayment, monthlyPayment, tenor } =
        leaseCalculation;

      setSavedItems((prevItems) => [
        ...prevItems,
        {
          balloonPayment,
          downPayment,
          monthlyPayment,
          tenor,
          title: `${brand} ${type}`,
        },
      ]);
    },
    []
  );

  return {
    savedItems,
    fetchLeaseCalculation,
  };
};
