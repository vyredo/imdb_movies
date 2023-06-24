/** create unit test for movie component */
import { render, screen } from "@testing-library/react";
import { Movie } from "./movie";

const testId = "tt0111161";
describe("Render movie with Not Found", () => {
  render(<Movie />);
  window.history.pushState({}, "", `/movies/${testId}`);
  test("should render movie with id", () => {
    const movieTitle = screen.getByText(/Not Found/i);
    expect(movieTitle).toBeInTheDocument();
  });
});
