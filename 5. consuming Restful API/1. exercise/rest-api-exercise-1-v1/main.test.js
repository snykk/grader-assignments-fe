import { task1, task2, task3, task4 } from "./tasks";
import { jest } from "@jest/globals";

describe("Task 1", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  it("should call fetch with correct url", async () => {
    await task1();
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000");
  });
});

describe("Task 2", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => "password",
    });
  });
  it("should call fetch with correct url", async () => {
    const response = await task2();
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:3000/task2", {
      method: "PATCH",
    });
    expect(response).toBe("password");
  });
});

describe("Task 3", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  it("should call fetch with correct url", async () => {
    await task3();
    const url = new URL(global.fetch.mock.calls[0][0]);
    const params = global.fetch.mock.calls[0][1];

    expect(url.origin).toBe("http://localhost:3000");
    expect(url.pathname).toBe("/task3");
    expect(url.searchParams.get("user_id")).toBe("3");
    expect(url.searchParams.get("role")).toBe("admin");

    expect(params.method).toBe("POST");
  });
});

describe("Task 4", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  it("should call fetch with correct url", async () => {
    await task4();
    const url = new URL(global.fetch.mock.calls[0][0]);
    const params = global.fetch.mock.calls[0][1];

    expect(url.origin).toBe("http://localhost:3000");
    expect(url.pathname).toBe("/task4");

    expect(params.method).toBe("POST");
    expect(params.headers["Content-Type"]).toBe("application/json");
    expect(JSON.parse(params.body).username).toBe("admin");
    expect(JSON.parse(params.body).password).toBe("password");
  });
});
