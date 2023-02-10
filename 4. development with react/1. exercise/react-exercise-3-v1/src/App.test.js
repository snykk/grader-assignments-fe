import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment-timezone";
import App from "./App";

const data = [
  ["Tokyo", "Asia/Tokyo"],
  ["New York", "America/New_York"],
  ["Madrid", "Europe/Madrid"],
  ["Cairo", "Africa/Cairo"],
  ["Sydney", "Australia/Sydney"],
];

describe("Time Converter", () => {
  it("converted time: should start with 00:00:00", () => {
    render(<App />);
    expect(screen.getByText("Converted time: 00:00:00")).toBeInTheDocument();
  });

  it("when selecting another timezone, should update the converted time", () => {
    const { container } = render(<App />);
    expect(screen.getByText("Converted time: 00:00:00")).toBeInTheDocument();
    const timezoneSelect = container.querySelector("select");
    data.forEach((item) => {
      userEvent.selectOptions(timezoneSelect, item[0]);
      const formatedTime = moment("01:00:00", "HH:mm:ss");
      const time = moment.tz(formatedTime, item[1]).format("HH:mm:ss");
      expect(screen.getByText(`Converted time: ${time}`)).toBeInTheDocument();
    });
  });
});
