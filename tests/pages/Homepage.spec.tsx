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

test("renders navbar", () => {
  renderPage(<Homepage />);
  const navbar: HTMLElement = screen.getAllByRole("navigation")[0];
  expect(navbar).toBeVisible();
  const about: HTMLElement = screen.getAllByRole("link", {
    name: /About/i,
  })[0];
  expect(about).toBeVisible();
  const explorebycity: HTMLElement = screen.getAllByRole("link", {
    name: /Explore by city/i,
  })[0];
  expect(explorebycity).toBeVisible();
  const signin: HTMLElement = screen.getAllByRole("button", {
    name: /Sign In/i,
  })[0];
  expect(signin).toBeVisible();
});
