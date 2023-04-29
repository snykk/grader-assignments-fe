import React from "react";
import {
  render,
  waitFor,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("/photos", () => {
  beforeEach(() => {});

  it("should render initially with correct fetch url", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockedResolvedValue),
    });
    render(
      <MemoryRouter initialEntries={["/photos"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.findByText("Siapa yang Tahu???"));
    expect(fetch).lastCalledWith("http://localhost:3001/photos");
    const expectedCaptions = mockedResolvedValue.map((photo) => photo.captions);
    checkCaption(expectedCaptions);
  });

  it("when select sort `desc` should call fetch with correct url", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve(mockedResolvedValue.sort((a, b) => b.id - a.id)),
    });
    render(
      <MemoryRouter initialEntries={["/photos"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.findByText("Siapa yang Tahu???"));
    const select = screen.getByTestId("sort");
    select.value = "desc";
    await waitFor(() => screen.findByText("Siapa yang Tahu???"));
    await act(() => {
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const latestCallsArgUrlParams = new URL(fetch.mock.lastCall).searchParams;
    expect(latestCallsArgUrlParams.get("_sort")).toBe("id");
    expect(latestCallsArgUrlParams.get("_order")).toBe("desc");
    const expectedCaptions = mockedResolvedValue
      .map((photo) => photo.captions)
      .sort((a, b) => b.id - a.id);
    checkCaption(expectedCaptions);
  });

  it("should call fetch with correct url when search", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve(
          mockedResolvedValue.filter((photo) =>
            photo.captions.includes("Siapa yang Tahu???")
          )
        ),
    });
    render(
      <MemoryRouter initialEntries={["/photos"]}>
        <App />
      </MemoryRouter>
    );
    const input = screen.getByTestId("search");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(screen.getByTestId("submit"));
    await waitFor(() => screen.findByText("Siapa yang Tahu???"));
    const latestCallsArgUrlParams = new URL(
      fetch.mock.calls[fetch.mock.calls.length - 1]
    ).searchParams;
    expect(latestCallsArgUrlParams.get("q")).toBe("test");
    const expectedCaptions = mockedResolvedValue
      .filter((photo) => photo.captions.includes("Siapa yang Tahu???"))
      .map((photo) => photo.captions);
    checkCaption(expectedCaptions);
  });

  it("when click delete on an item, should fetch the correct url", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockedResolvedValue),
    });
    render(
      <MemoryRouter initialEntries={["/photos"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.findByText("Siapa yang Tahu???"));

    const deleteBtn = screen.getAllByTestId("delete-btn")[0];
    fireEvent.click(deleteBtn);
    expect(fetch).lastCalledWith("http://localhost:3001/photos/10", {
      method: "DELETE",
    });
    const expectedCaptions = mockedResolvedValue
      .filter((photo) => photo.id !== 10)
      .map((photo) => photo.captions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText("Banyak yang Tahu")
    );
    checkCaption(expectedCaptions);
  });
});

describe("/add", () => {
  it("when submit should call fetch with correct url", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockedResolvedValue),
    });
    render(
      <MemoryRouter initialEntries={["/add"]}>
        <App />
      </MemoryRouter>
    );
    const input = screen.getByTestId("imageUrl");
    fireEvent.change(input, { target: { value: "test" } });
    const input2 = screen.getByTestId("captions");
    fireEvent.change(input2, { target: { value: "Mau tahu banget" } });
    const input3 = screen.getByTestId("secret");
    fireEvent.change(input3, { target: { value: "password" } });
    fireEvent.click(screen.getByTestId("submit"));

    const lastCall = fetch.mock.lastCall;
    expect(lastCall[0]).toBe("http://localhost:3001/photos");
    expect(lastCall[1].method).toBe("POST");
    expect(lastCall[1].headers["Content-Type"]).toBe("application/json");
    const body = JSON.parse(lastCall[1].body);
    expect(body.imageUrl).toBe("test");
    expect(body.captions).toBe("Mau tahu banget");
    expect(body.secret).toBe("password");
    expect(body.createdAt).not.toBeUndefined();
    expect(body.updatedAt).not.toBeUndefined();
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve([
          ...mockedResolvedValue,
          {
            id: 4,
            imageUrl: "test",
            captions: "Mau tahu banget",
            secret: "password",
          },
        ]),
    });
    await waitFor(() => screen.findByText("Mau tahu banget"));
  });
});

describe("/photos/:id", () => {
  it("should render with correct fetch url", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve(
          mockedResolvedValue.filter((photo) => photo.id === 5)[0]
        ),
    });
    render(
      <MemoryRouter initialEntries={["/photos/5"]}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => screen.findByText("Captions:"));
    expect(fetch).lastCalledWith("http://localhost:3001/photos/5");
    fireEvent.change(screen.getByTestId("captions"), {
      target: { value: "Bukan tahu biasa" },
    });

    fireEvent.click(screen.getByTestId("submit"));

    const lastCall = fetch.mock.lastCall;
    expect(lastCall[0]).toBe("http://localhost:3001/photos/5");
    expect(lastCall[1].method).toBe("PATCH");
    expect(lastCall[1].headers["Content-Type"]).toBe("application/json");
    const body = JSON.parse(lastCall[1].body);
    expect(body.imageUrl).toBe(
      "https://imgx.sonora.id/crop/50x44:728x471/x/photo/2019/10/23/1633557869.jpg"
    );
    expect(body.captions).toBe("Bukan tahu biasa");
    expect(body.updatedAt).not.toBeUndefined();

    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve([
          ...mockedResolvedValue.filter((photo) => photo.id !== 5),
          {
            id: 5,
            imageUrl:
              "https://imgx.sonora.id/crop/50x44:728x471/x/photo/2019/10/23/1633557869.jpg",
            captions: "Bukan tahu biasa",
            secret: "password",
          },
        ]),
    });

    await waitFor(() => screen.findByText("Bukan tahu biasa"));
  });
});

const checkCaption = (expectedCaptions) => {
  const photoCaptions = screen
    .getAllByTestId("photo-caption")
    .map((el) => el.textContent);
  expect(photoCaptions).toEqual(expectedCaptions);
};

const mockedResolvedValue = [
  {
    imageUrl:
      "https://imgx.sonora.id/crop/50x44:728x471/x/photo/2019/10/23/1633557869.jpg",
    captions: "Siapa yang Tahu???",
    createdAt: "2022-11-25T10:25:50.394Z",
    updatedAt: "2022-11-28T04:31:16.956Z",
    secret: "password",
    id: 5,
  },
  {
    imageUrl:
      "https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/10/kuliner-tahu-sumedang.jpg?fit=1080%2C1080&ssl=1",
    captions: "Mereka semua Tahu",
    createdAt: "2022-11-25T10:42:19.285Z",
    updatedAt: "2022-11-25T11:15:18.914Z",
    secret: "password",
    id: 7,
  },
  {
    imageUrl:
      "https://cdn1-production-images-kly.akamaized.net/n3mirwqD6QsJ-sIWaRujScIM-OA=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3575067/original/045426800_1631867490-tempe-5553222_1920.jpg",
    captions: "Mereka tidak Tahu",
    createdAt: "2022-11-25T10:42:53.293Z",
    updatedAt: "2022-11-25T11:16:27.833Z",
    secret: "password",
    id: 8,
  },
  {
    imageUrl:
      "https://cdn0-production-images-kly.akamaized.net/ypKb42s0yo4TPJsvoRgdwpQddEk=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1320174/original/026189400_1471425682-kopisiantar.jpg",
    captions: "Tidak semua Tahu",
    createdAt: "2022-11-25T10:43:42.884Z",
    updatedAt: "2022-11-25T10:43:42.884Z",
    secret: "password",
    id: 9,
  },
  {
    imageUrl:
      "https://cdn.idntimes.com/content-images/post/20200309/69266770-749425448821286-8877663891942941125-n-32274e4a9cde7ceaddbc0fbe7de31ee2_600x400.jpg",
    captions: "Banyak yang Tahu",
    createdAt: "2022-11-25T10:58:48.032Z",
    updatedAt: "2022-11-25T10:58:48.032Z",
    secret: "password",
    id: 10,
  },
];
