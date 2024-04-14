import { screen } from "@testing-library/react";
import { Homepage } from "@/app";
import { renderPage } from "../utils";
import { copy } from "@/copy";

const { heading, paragraph } = copy.home;

test("renders headings", () => {
  renderPage(<Homepage />);
  const thePlaceHeading: HTMLElement = screen.getByRole("heading", {
    name: `${heading.top} ${heading.bottom}`,
  });
  expect(thePlaceHeading).toBeVisible();
});

test("renders paragraphs", () => {
  renderPage(<Homepage />);
  const thePlaceParagraph: HTMLElement = screen.getByText(paragraph);
  expect(thePlaceParagraph).toBeVisible();
});

test("renders image", () => {
  renderPage(<Homepage />);
  const image: HTMLElement = screen.getByRole("img", {
    name: "girl on phone",
  });
  expect(image).toBeVisible();
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
