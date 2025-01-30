import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";

import { LeaseCalculatorForm } from "./LeaseCalculatorForm";

const leaseBoundaries = {
  objectYear: {
    min: 2017,
    max: 2022,
  },
  purchasePrice: {
    min: 50000,
    max: 1000000,
  },
};

describe("[LeaseCalculatorForm]", () => {
  it("should render", () => {
    render(
      <LeaseCalculatorForm
        leaseBoundaries={leaseBoundaries}
        fetchLeaseCalculation={jest.fn()}
      />
    );

    expect(
      screen.getByRole("textbox", {
        name: /Merk/,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Berekening opslaan/,
      })
    ).toBeInTheDocument();
  });

  it("should call fetchLeaseCalculation prop after form submit", async () => {
    const callback = jest.fn();
    render(
      <LeaseCalculatorForm
        leaseBoundaries={leaseBoundaries}
        fetchLeaseCalculation={callback}
      />
    );

    const brandInput = screen.getByRole("textbox", { name: /Merk/ });
    await userEvent.type(brandInput, "DAF");

    const brandTypeInput = screen.getByRole("textbox", { name: /Type/ });
    await userEvent.type(brandTypeInput, "XF480");

    const yearInput = screen.getByRole("spinbutton", { name: /Bouwjaar/ });
    await userEvent.type(yearInput, "2021");

    const purchaseValueInput = screen.getByRole("spinbutton", {
      name: /Aanschafwaarde/,
    });
    await userEvent.type(purchaseValueInput, "50000");

    const button = screen.getByRole("button", {
      name: /Berekening opslaan/,
    });

    await act(async () => {
      await userEvent.click(button);
    });

    expect(callback).toHaveBeenCalledWith({
      brand: "DAF",
      purchasePrice: 50000,
      type: "XF480",
      year: 2021,
    });
  });
});
