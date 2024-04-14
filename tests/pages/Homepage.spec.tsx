import { screen } from "@testing-library/react";
import { Homepage } from "@/app";
import { renderPage } from "../utils";
import { copy } from "@/copy";

const { description, search } = copy.home;

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

test.skip("renders navbar", () => {
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
