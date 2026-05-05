import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  test("'Hello!'という見出しが表示されていること", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /hello!/i });
    expect(heading).toBeInTheDocument();
  });

  test("daisyUI のボタンが表示されていること", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /daisyui button/i });
    expect(button).toBeInTheDocument();
  });
});
