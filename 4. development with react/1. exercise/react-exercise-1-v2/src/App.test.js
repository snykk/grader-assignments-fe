import React from "react";
import { render } from "@testing-library/react";
import { Task1, Task1_1, Task2, Task3, Task3_1, Task4 } from "./tasks";
import { v4 as uuidv4 } from "uuid";
import { act } from "@testing-library/react";

describe("Task1", () => {
  const { container } = render(<Task1 />);
  it("should have 'basic_component' class", () => {
    expect(container.firstChild.classList.contains("basic_component")).toBe(
      true
    );
  });

  it("should have 'Task 1' as text", () => {
    const { container } = render(<Task1 />);

    expect(container.getElementsByTagName("h1")[0].textContent).toBe(
      "Halo dunia!"
    );
  });
});

describe("Task1_1", () => {
  it("should have correct text as content", () => {
    const uuid = uuidv4();
    const { container } = render(<Task1_1 name={uuid} />);
    expect(container.firstChild.textContent).toBe(uuid);
  });
});

describe("Task1_2", () => {
  it("should have correct content initially", () => {
    const { container } = render(<Task2 />);
    expect(container.getElementsByTagName("h1")[0].textContent).toBe(
      "Klik tombol di bawah"
    );
  });

  it("after button click, should have correct content", async () => {
    const { container } = render(<Task2 />);

    act(() => {
      container.getElementsByTagName("button")[0].click();
    });
    expect(container.getElementsByTagName("h1")[0].textContent).toBe(
      "Tombol telah di-klik!"
    );
  });
});

describe("Task3", () => {
  it("should render list of students correctly", () => {
    const { container } = render(<Task3 />);
    const list = container.getElementsByTagName("h2");
    expect(list.length).toBe(4);
    students.forEach((student, index) => {
      expect(list[index].textContent).toBe(`${student.name} - ${student.age}`);
    });
  });
});

describe("Task3_1", () => {
  it("should render list of students correctly", () => {
    const { container } = render(<Task3_1 />);
    const list = container.getElementsByTagName("h2");
    expect(list.length).toBe(2);
    students
      .filter((student) => student.dropout === false)
      .forEach((student, index) => {
        expect(list[index].textContent).toBe(
          `${student.name} - ${student.age}`
        );
      });
  });
});

describe("Task4", () => {
  it("should still render the paragraph", () => {
    const { container } = render(<Task4 />);
    expect(container.getElementsByTagName("p").length).toBe(1);
  });

  it("on button click, should remove the paragraph", () => {
    const { container } = render(<Task4 />);
    act(() => {
      container.getElementsByTagName("button")[0].click();
    });
    expect(container.getElementsByTagName("p").length).toBe(0);
  });
});

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];
