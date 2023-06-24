/** create unit test for movie component */
import { render, screen } from "@testing-library/react";
import { MoviesMockData } from "../../../../mockData/movies";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../../../../app";

const server = setupServer(
  rest.get("https://imdb-api.com/", (req, res, ctx) => {
    return res(ctx.json(MoviesMockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Render movies element with mock-service-worker", () => {
  test("should render Element", async () => {
    render(<App />);
    window.history.pushState({}, "", `/movies`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const find = await screen.findAllByText(/The Shawshank Redemption/i);
    expect(find).toBeDefined();
  });
});
