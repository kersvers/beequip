export type LeaseCalculationItem = {
  title: string;
  monthlyPayment: number;
  downPayment: number;
  balloonPayment: number;
  tenor: number;
}

export type LeaseCalculationInput = {
  brand: string;
  type: string;
  year: number;
  purchasePrice: number;
}