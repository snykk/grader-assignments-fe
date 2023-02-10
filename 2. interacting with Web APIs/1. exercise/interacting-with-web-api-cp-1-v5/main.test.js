const { expect, describe, it } = require("@jest/globals");

const tasks = require("./main");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe("task 1", () => {
  it("should get value inside element with id 'random-number'", () => {
    const randomNumberElement = window.document.getElementById("random-number");

    randomNumberElement.textContent = getRandomInt(100);

    expect(tasks.task1()).toBe(randomNumberElement.textContent);
  });
});

describe("task 1.1", () => {
  it("should get value inside element with id 'random-number-class'", () => {
    const randomNumberElement = window.document.getElementById(
      "random-number-class"
    );

    randomNumberElement.textContent = getRandomInt(100);

    expect(tasks.task1_1()).toBe(randomNumberElement.textContent);
  });
});

describe("task 2", () => {
  it("should change element with id `task-2` value to 100", () => {
    const element = window.document.getElementById("task-2");

    element.textContent = 55;
    tasks.task2();

    expect(element.textContent).toEqual("100");
  });
});

describe("task 3", () => {
  it("should change 'task-3' element to 100 when button clicked", () => {
    const element = window.document.getElementById("task-3");
    const button = window.document.getElementById("task-3-button");

    element.textContent = 55;

    tasks.task3();
    button.click();
    expect(element.textContent).toEqual("100");
  });
});

describe("task 3.1", () => {
  it("should change 'task-3-1' element to empty string when button clicked", () => {
    const element = window.document.getElementById("task-3-1");
    const button = window.document.getElementById("task-3-1-button");

    element.textContent = "Hello";

    tasks.task3_1();
    button.click();
    expect(element.textContent).toEqual("");
  });
});
