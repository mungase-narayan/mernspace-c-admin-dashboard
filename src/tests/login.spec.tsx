import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/auth/LoginPage";
import React from "react";

describe("Login page", () => {
  it("Should render with required fields", () => {
    render(<LoginPage />);

    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
  });
});
