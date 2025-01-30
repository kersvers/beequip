import { render, screen } from "@testing-library/react";

import { LeaseCalculationResult } from "./LeaseCalculationResult";

describe("[LeaseCalculationsList]", () => {
  it("should render", () => {
    render(
      <LeaseCalculationResult
        item={{
          title: "DAF XF480",
          balloonPayment: 100,
          downPayment: 100,
          monthlyPayment: 100,
          tenor: 36,
        }}
      />
    );

    expect(screen.getByText(/DAF XF480/)).toBeInTheDocument();
  });
});
