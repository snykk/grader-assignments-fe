import * as React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import userEvent from "@testing-library/user-event";

function renderWithInitialEntries(initialEntries) {
  return render(
    <ChakraProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <App />
      </MemoryRouter>
    </ChakraProvider>
  );
}

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    url += url.endsWith("/") ? "" : "/";
    switch (url) {
      case "https://swapi.py4e.com/api/films/":
        return Promise.resolve({
          json: async () => ({
            results: [
              {
                title: "A New Hope",
                url: "https://swapi.py4e.com/api/films/1/",
              },
              {
                title: "The Empire Strikes Back",
                url: "https://swapi.py4e.com/api/films/2/",
              },
            ],
          }),
        });
      case "https://swapi.py4e.com/api/films/2/":
        return Promise.resolve({
          json: async () => ({
            opening_crawl:
              "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            director: "Irvin Kershner",
            producer: "Gary Kurtz, Rick McCallum",
            release_date: "1980-05-17",
          }),
        });
      case "https://swapi.py4e.com/api/planets/":
        return Promise.resolve({
          json: async () => ({
            results: [
              {
                name: "Tatooine",
                url: "https://swapi.py4e.com/api/planets/1/",
              },
            ],
          }),
        });
      case "https://swapi.py4e.com/api/planets/1/":
        return Promise.resolve({
          json: async () => ({
            rotation_period: "23",
            orbital_period: "304",
            terrain: "desert",
            population: "200000",
            diameter: "10465",
            climate: "arid",
          }),
        });
      case "https://swapi.py4e.com/api/people/":
        return Promise.resolve({
          json: async () => ({
            results: [
              {
                name: "Luke Skywalker",
                height: "172",
                mass: "77",
                hair_color: "blond",
                skin_color: "fair",
                eye_color: "blue",
                birth_year: "19BBY",
                gender: "male",
                url: "https://swapi.py4e.com/api/people/1/",
              },
            ],
          }),
        });
      default:
        return Promise.reject(new Error("URL Not Found"));
    }
  });
});

it("renders index route correctly", async () => {
  renderWithInitialEntries(["/"]);

  expect(screen.getByText(/People/i)).toBeInTheDocument();
  expect(screen.getByText(/Planets/i)).toBeInTheDocument();
  expect(screen.getByText(/Movies/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/People/i));

  await waitFor(async () => {
    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
  });
});

it("can navigate to planets", async () => {
  renderWithInitialEntries(["/"]);

  userEvent.click(screen.getByText(/Planets/i));

  await waitFor(async () => {
    expect(await screen.findByText("Tatooine")).toBeInTheDocument();
  });
});

it("can navigate to movies", async () => {
  renderWithInitialEntries(["/"]);

  userEvent.click(screen.getByText(/Movies/i));

  await waitFor(async () => {
    expect(await screen.findByText("A New Hope")).toBeInTheDocument();
  });
});

it("renders /star-wars/planets route correctly", async () => {
  renderWithInitialEntries(["/star-wars/planets"]);
  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

  expect(screen.getByText("Tatooine")).toBeInTheDocument();
});

it("renders /star-wars/planets/:id route correctly", async () => {
  renderWithInitialEntries(["/star-wars/planets/1"]);
  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

  expect(screen.getByText("23")).toBeInTheDocument();
  expect(screen.getByText("304")).toBeInTheDocument();
  expect(screen.getByText("desert")).toBeInTheDocument();
  expect(screen.getByText("200000")).toBeInTheDocument();
  expect(screen.getByText("10465")).toBeInTheDocument();
  expect(screen.getByText("arid")).toBeInTheDocument();
});

it("renders /star-wars/movies route correctly", async () => {
  renderWithInitialEntries(["/star-wars/movies"]);
  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

  expect(screen.getByText("A New Hope")).toBeInTheDocument();
});

it("renders /star-wars/movies/:id route correctly", async () => {
  renderWithInitialEntries(["/star-wars/movies/2"]);
  await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

  expect(screen.getByText("1980-05-17")).toBeInTheDocument();
  expect(screen.getByText("Gary Kurtz, Rick McCallum")).toBeInTheDocument();
  expect(screen.getByText("Irvin Kershner")).toBeInTheDocument();
  expect(
    screen.getByText(
      "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...."
    )
  ).toBeInTheDocument();
});
