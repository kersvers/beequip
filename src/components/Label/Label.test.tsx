import { render, screen } from "@testing-library/react";

import { Label } from "./Label";

describe("[Label]", () => {
  it("should render", () => {
    render(<Label text="Label" />);

    expect(screen.getByText(/Label/)).toBeInTheDocument();
  });
});
