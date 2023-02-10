import React from "react";
import {
  render,
  screen,
  act,
} from "@testing-library/react";
import App from "./App";

describe("Table", () => {
  describe("Before refresh", () => {
    it("should show refresh button", () => {
      render(<App mentors={MentorsData} />);
      expect(screen.getByText("Refresh")).toBeInTheDocument();
    });

    it("should show that all data is not available", () => {
      render(<App mentors={MentorsData} />);
      expect(screen.getAllByText("Data not available").length).toBe(3);
    });
  });

  describe("After refresh", () => {
    it("should not show refresh button",  () => {
      render(<App mentors={[]} />);
      act(() => {
        screen.getByText("Refresh").click();
      });
      expect(screen.queryByText("Refresh")).not.toBeInTheDocument();
    });

    it("should show all data",  () => {
      const { container } = render(<App mentors={[]} />);
      act(() => {
        screen.getByText("Refresh").click();
      });
      expect(screen.queryByText("Data not available")).not.toBeInTheDocument();
      const tr = container.querySelectorAll("table tbody tr");
      tr.forEach((row, index) => {
        const mentor = MentorsData[index];
        expect(row.children[0].textContent).toBe(mentor.name);
        expect(row.children[1].textContent).toBe(mentor.house);
        expect(row.children[2].textContent).toBe(mentor.email);
      });
    });

    it("should show zebra striped table",  () => {
      const { container } = render(<App mentors={[]} />);
      act(() => {
        screen.getByText("Refresh").click();
      });
      const tr = container.querySelectorAll("table tbody tr");
      tr.forEach((row, index) => {
        expect(row.style.backgroundColor).toBe(
          index % 2 === 0 ? "lightCyan" : "white"
        );
      });
    });
  });
});

const MentorsData = [
  {
    id: 1,
    name: "Muhammad Ramadhoni",
    house: "House FE 01",
    email: "ramadhoni@mail.com",
  },
  {
    id: 2,
    name: "Indra Akhmad Firdhaus",
    house: "House FE 02",
    email: "indra@mail.com",
  },
  {
    id: 3,
    name: "Dimitri Wahyudiputra",
    house: "House FE 03",
    email: "dimitri@mail.com",
  },
  {
    id: 4,
    name: "Maulana Fajar Ibrahim",
    house: "House FE 04",
    email: "fajar@mail.com",
  },
  {
    id: 5,
    name: "Tisa Monita",
    house: "House FE 05",
    email: "tisa@mail.com",
  },
  {
    id: 6,
    name: "Annisa Tahira",
    house: "House FE 06",
    email: "annisa@mail.com",
  },
  {
    id: 7,
    name: "Kobar Septyanus Sumarsono",
    house: "House FE 07",
    email: "kobar@mail.com",
  },
  {
    id: 8,
    name: "Asrul Harahap",
    house: "House FE 08",
    email: "asrul@mail.com",
  },
  {
    id: 9,
    name: "Alvin Arkansas",
    house: "House FE 09",
    email: "alvin@mail.com",
  },
  {
    id: 10,
    name: "Mirza Chilman Garin",
    house: "House FE 10",
    email: "mirza@mail.com",
  },
  {
    id: 11,
    name: "Tandry Syawaludin Soedijanto",
    house: "House FE 11",
    email: "tandry@mail.com",
  },
  {
    id: 12,
    name: "Ricky Kurniawan",
    house: "House FE 12",
    email: "ricky@mail.com",
  },
  {
    id: 13,
    name: "Pahlevi Fikri Auliya",
    house: "House FE 13",
    email: "pahlevi@mail.com",
  },
];
