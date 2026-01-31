import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("starts at 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  it("increments when + is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });

  it("decrements when − is clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole("button", { name: /decrement/i }));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
  });
});
