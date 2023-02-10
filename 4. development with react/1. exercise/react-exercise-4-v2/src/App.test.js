import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";

global.fetch = jest.fn();

describe("App", () => {
  it("by default should request all data", async () => {
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(all_fetch),
    });
    const { container } = render(<App />);
    await waitFor(() => screen.findByText("My Neighbor Totoro"), 50000);
    const requestUrl = global.fetch.mock.calls[0][0];
    const url = requestUrl.split("?")[0];
    expect(url).toBe(
      "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    );
    const select = container.querySelector("select");
    let text = select.options[select.selectedIndex].text;
    expect(text).toBe("All");
    expect(screen.getByText("となりのトトロ")).toBeTruthy();
    expect(screen.getByText("1988")).toBeTruthy();
    expect(screen.getByText("Rating: 93")).toBeTruthy();
    expect(screen.getByText("Director: Hayao Miyazaki")).toBeTruthy();
    expect(screen.getByText("Producer: Hayao Miyazaki")).toBeTruthy();
    expect(screen.getByText(all_fetch.description)).toBeTruthy();
  });

  it("should request basic data", async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(basic_fetch),
    });
    const { container } = render(<App />);
    await waitFor(() => screen.findByText("My Neighbor Totoro"));
    const select = container.querySelector("select");
    const value = screen.getByRole("option", {
      name: "Basic",
    }).value;
    fireEvent.change(select, { target: { value } });
    await waitFor(() => screen.findByText("Loading..."));
    await waitFor(() => screen.findByText("My Neighbor Totoro"));
    const requestUrl = global.fetch.mock.calls[1][0];
    const url = requestUrl.split("?")[0];
    expect(url).toBe(
      "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    );
    const params = requestUrl.split("?")[1];
    expect(params).toBe("fields=title,description");
    let text = select.options[select.selectedIndex].text;
    expect(text).toBe("Basic");
    expect(screen.queryByText("となりのトトロ")).toBeFalsy();
    expect(screen.queryByText("1988")).toBeFalsy();
    expect(screen.queryByText("Rating: 93")).toBeFalsy();
    expect(screen.queryByText("Director: Hayao Miyazaki")).toBeFalsy();
    expect(screen.queryByText("Producer: Hayao Miyazaki")).toBeFalsy();
    expect(screen.getByText(basic_fetch.description)).toBeTruthy();
  });

  it("should request basic data with creator", async () => {
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(basic_creator_fetch),
    });
    const { container } = render(<App />);
    await waitFor(() => screen.findByText("My Neighbor Totoro"));
    const select = container.querySelector("select");
    const value = screen.getByRole("option", {
      name: "Basic with Creator",
    }).value;
    fireEvent.change(select, {
      target: { value },
    });
    await waitFor(() => screen.findByText("Loading..."));
    await waitFor(() => screen.findByText("My Neighbor Totoro"));
    const requestUrl = global.fetch.mock.calls[1][0];
    const url = requestUrl.split("?")[0];
    expect(url).toBe(
      "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    );
    const params = requestUrl.split("?")[1];
    expect(params).toBe("fields=title,description,director,producer");
    let text = select.options[select.selectedIndex].text;
    expect(text).toBe("Basic with Creator");
    expect(screen.queryByText("となりのトトロ")).toBeFalsy();
    expect(screen.queryByText("1988")).toBeFalsy();
    expect(screen.queryByText("Rating: 93")).toBeFalsy();
    expect(screen.getByText("Director: Hayao Miyazaki")).toBeTruthy();
    expect(screen.getByText("Producer: Hayao Miyazaki")).toBeTruthy();
    expect(screen.getByText(basic_creator_fetch.description)).toBeTruthy();
  });
});

const all_fetch = {
  id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  title: "My Neighbor Totoro",
  original_title: "となりのトトロ",
  original_title_romanised: "Tonari no Totoro",
  image:
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
  movie_banner:
    "https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg",
  description:
    "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
  director: "Hayao Miyazaki",
  producer: "Hayao Miyazaki",
  release_date: "1988",
  running_time: "86",
  rt_score: "93",
  people: [
    "https://ghibliapi.fly.dev/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
    "https://ghibliapi.fly.dev/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
    "https://ghibliapi.fly.dev/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
    "https://ghibliapi.fly.dev/people/87b68b97-3774-495b-bf80-495a5f3e672d",
    "https://ghibliapi.fly.dev/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
    "https://ghibliapi.fly.dev/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
    "https://ghibliapi.fly.dev/people/c491755a-407d-4d6e-b58a-240ec78b5061",
    "https://ghibliapi.fly.dev/people/f467e18e-3694-409f-bdb3-be891ade1106",
    "https://ghibliapi.fly.dev/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
    "https://ghibliapi.fly.dev/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
  ],
  species: [
    "https://ghibliapi.fly.dev/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    "https://ghibliapi.fly.dev/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
    "https://ghibliapi.fly.dev/species/74b7f547-1577-4430-806c-c358c8b6bcf5",
  ],
  locations: ["https://ghibliapi.fly.dev/locations/"],
  vehicles: ["https://ghibliapi.fly.dev/vehicles/"],
  url: "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
};

const basic_fetch = {
  title: "My Neighbor Totoro",
  description:
    "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
};

const basic_creator_fetch = {
  title: "My Neighbor Totoro",
  description:
    "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
  director: "Hayao Miyazaki",
  producer: "Hayao Miyazaki",
};
