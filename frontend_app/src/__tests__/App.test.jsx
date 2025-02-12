// src/__tests__/App.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App"; // Adjust the import path if necessary

test("renders Task List heading", () => {
  render(<App />);
  const heading = screen.getByText(/Task List/i); // This checks for the "Task List" text
  expect(heading).toBeInTheDocument(); // Asserts that the heading is in the document
});
