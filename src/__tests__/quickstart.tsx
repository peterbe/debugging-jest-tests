/**
 * @jest-environment node
 */
import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Fetch } from "../fetch";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Fetch />);

  //   // ACT
  //   await userEvent.click(screen.getByText("Load Greeting"));
  //   await screen.findByRole("heading");

  //   // ASSERT
  //   expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  //   expect(screen.getByRole("button")).toBeDisabled();
});
