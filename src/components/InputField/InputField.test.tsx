import { render, screen } from "@testing-library/react";

import { InputField } from "./InputField";

describe("[InputField]", () => {
  it("should render", () => {
    render(<InputField />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
