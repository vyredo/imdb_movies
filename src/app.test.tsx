import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    // link Movies is find
    const headline = screen.getAllByText(/Movies/i);
    expect(headline).toBeDefined();
  });
});
