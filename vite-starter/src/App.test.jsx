import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {kebabCaseToTitleCase} from "./helpers.js";

test("button click flow", () => {
  // render the App
  render(<App />);

  // find the btn
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // check initial color
  expect(buttonElement).toHaveClass("medium-violet-red");

  // click the btn
  fireEvent.click(buttonElement);

  // check btn text
  expect(buttonElement).toHaveTextContent(/red/i)

  // check the btn color
  expect(buttonElement).toHaveClass("midnight-blue");
});


test("checkbox flow", () => {
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  })
});