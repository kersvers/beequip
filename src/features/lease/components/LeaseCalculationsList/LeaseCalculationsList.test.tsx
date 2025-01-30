import { render, screen } from "@testing-library/react";

import { LeaseCalculationsList } from "./LeaseCalculationsList";

describe("[LeaseCalculationsList]", () => {
  it("should render empty state", () => {
    render(<LeaseCalculationsList />);

    expect(
      screen.getByText(/Nog geen berekeningen opgeslagen/)
    ).toBeInTheDocument();
  });

  it("should render saved calculations", () => {
    render(
      <LeaseCalculationsList
        items={[
          {
            title: "DAF XF480",
            balloonPayment: 100,
            downPayment: 100,
            monthlyPayment: 100,
            tenor: 36,
          },
        ]}
      />
    );

    expect(screen.getByText(/DAF XF480/)).toBeInTheDocument();
  });
});
