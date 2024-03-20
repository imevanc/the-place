import { screen } from "@testing-library/react";
import { Homepage } from "@/app";
import { renderPage } from "../utils";

test("renders heading", () => {
  renderPage(<Homepage />);
  const heading: HTMLElement = screen.getByRole("heading", {
    name: /Hello World!/i,
  });
  expect(heading).toBeVisible();
});
