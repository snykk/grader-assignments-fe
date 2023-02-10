import React from "react";
import { render, screen } from "@testing-library/react";
import { Student } from "./App";

describe("Student", () => {
  it("should render the name, first name and status", async () => {
    render(<Student name={"Djarot Purnomo"} isStudent={true} />);
    expect(screen.getByText("Name: Djarot Purnomo")).toBeInTheDocument();
    expect(screen.getByText("First name: Djarot")).toBeInTheDocument();
    expect(screen.getByText("Status: Student")).toBeInTheDocument();
  });

  it("should render the name, first name and status, with isStudent false", async () => {
    render(<Student name={"Aditya Januar"} isStudent={false} />);
    expect(screen.getByText("Name: Aditya Januar")).toBeInTheDocument();
    expect(screen.getByText("First name: Aditya")).toBeInTheDocument();
    expect(screen.getByText("Status: Not student")).toBeInTheDocument();
  });
});
