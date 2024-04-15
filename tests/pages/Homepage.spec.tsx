import { screen, fireEvent } from "@testing-library/react";
import { Homepage } from "@/app";
import { renderPage } from "../utils";
import { copy } from "@/copy";
import { useScreenMatcher } from "@/hooks";

const { description, search } = copy.home;

jest.mock("../../src/hooks/useScreenMatcher");
const mockUseScreenMatcher = jest.mocked(useScreenMatcher);
mockUseScreenMatcher.mockReturnValue({ screenMatches: true });

test("renders headings", () => {
  renderPage(<Homepage />);
  const thePlaceHeading: HTMLElement = screen.getByRole("heading", {
    name: `${description.heading.top} ${description.heading.bottom}`,
  });
  expect(thePlaceHeading).toBeVisible();
});

test("renders paragraphs", () => {
  renderPage(<Homepage />);
  const thePlaceParagraph: HTMLElement = screen.getByText(
    description.paragraph,
  );
  expect(thePlaceParagraph).toBeVisible();
});

test("renders image", () => {
  renderPage(<Homepage />);
  const image: HTMLElement = screen.getByRole("img", {
    name: description.img,
  });
  expect(image).toBeVisible();
});

test("renders search label", () => {
  renderPage(<Homepage />);
  const searchLabel: HTMLElement = screen.getByRole("button", {
    name: search.label,
  });
  const searchCombobox: HTMLInputElement = screen.getByRole("combobox", {
    name: search.label,
  });
  // TODO: add test for the selection
  expect(searchCombobox.placeholder).toBe(search.placeholder);
  expect(searchLabel).toBeVisible();
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
  const mobileNavbar: HTMLElement = screen.getByRole("navigation");
  const burgerButton: HTMLElement = screen.getByRole("button", {
    name: /Burger Button/i,
  });
  expect(burgerButton).toBeVisible();
  fireEvent.click(burgerButton);
  const about: HTMLElement = screen.getByRole("link", {
    name: /About/i,
  });
  const downloadTheApp: HTMLElement = screen.getByRole("link", {
    name: /Download the App/i,
  });
  const signIn: HTMLElement = screen.getByRole("link", {
    name: /Sign In/i,
  });
  const exploreByCity: HTMLElement = screen.getByRole("link", {
    name: /Explore by City/i,
  });
  expect(about).toBeVisible();
  expect(mobileNavbar).toBeVisible();
  expect(downloadTheApp).toBeVisible();
  expect(signIn).toBeVisible();
  expect(exploreByCity).toBeVisible();
});
