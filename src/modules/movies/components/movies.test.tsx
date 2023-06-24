/** create unit test for movie component */
import { render } from "@testing-library/react";
import { MoviesMockData } from "mockData/movies";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "app";

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
    const { debug } = render(<App />);
    window.history.pushState({}, "", `/movies`);
    debug();
  });
});
