import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("はじめての Vitest", () => {
    render(<App />);
    expect(
      screen.getByText("Click on the Vite and React logos to learn more")
    ).toBeInTheDocument();
  });
});
