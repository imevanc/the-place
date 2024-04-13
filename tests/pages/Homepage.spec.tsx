import { screen } from "@testing-library/react";
import { Homepage } from "@/app";
import { renderPage } from "../utils";
import { useScreenMatcher } from "@/hooks";

jest.mock("../../src/hooks/useScreenMatcher");
const mockUseScreenMatcher = jest.mocked(useScreenMatcher);
mockUseScreenMatcher.mockReturnValue({ screenMatches: true });

test("renders heading", () => {
  renderPage(<Homepage />);
  const heading: HTMLElement = screen.getByRole("heading", {
    name: /Hello World!/i,
  });
  expect(heading).toBeVisible();
});

test("renders desktop navbar", () => {
  renderPage(<Homepage />);
  const navbar: HTMLElement = screen.getByRole("navigation");
  const about: HTMLElement = screen.getByRole("link", {
    name: /About/i,
  });
  const exploreByCity: HTMLElement = screen.getByRole("link", {
    name: /Explore by city/i,
  });
  const signIn: HTMLElement = screen.getByRole("button", {
    name: /Sign In/i,
  });

  expect(navbar).toBeVisible();
  expect(about).toBeVisible();
  expect(exploreByCity).toBeVisible();
  expect(signIn).toBeVisible();
});

test("renders mobile navbar", () => {
  mockUseScreenMatcher.mockReturnValue({ screenMatches: false });
  renderPage(<Homepage />);
  const downloadTheApp: HTMLElement = screen.getByRole("button", {
    name: /Download the App/i,
  });
  expect(downloadTheApp).toBeVisible();
});
