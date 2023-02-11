import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";
import { act } from "@testing-library/react";

const mockedData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
];

global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(mockedData),
  });

global.alert = jest.fn();

describe("Todo List", () => {
  it("should render all todo lists", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.findByText("delectus aut autem"));
    const todos = container.getElementsByClassName("todo-card");
    expect(todos.length).toBe(6);
  });

  it("shows Loading component", async () => {
    render(<App />);
    await act(async () => {
      expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });
  });

  it("should have correct titles and statuses from given API", async () => {
    const { container } = render(<App />);
    await screen.findByText("delectus aut autem");
    mockedData.forEach((todo, key) => {
      expect(container.getElementsByTagName("h2")[key].textContent).toBe(
        todo.title
      );
      expect(
        container
          .getElementsByTagName("h2")
          [key].parentElement.getElementsByTagName("p")[0].textContent
      ).toBe(todo.completed ? "Completed" : "Not Completed");
    });
  });

  it("should show alert when todo card is clicked", async () => {
    const { container } = render(<App />);
    await screen.findByText("delectus aut autem");
    const todos = container.getElementsByClassName("todo-card");
    Array.from(todos).forEach((todo) => {
      todo.click();
    });
    expect(global.alert).toHaveBeenCalledTimes(6);
    global.alert.mock.calls.forEach((call, key) => {
      expect(call[0]).toBe(`todo dengan id ${key + 1} telah di clicked`);
    });
  });
});