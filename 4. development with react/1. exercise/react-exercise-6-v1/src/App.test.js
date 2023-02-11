import React from "react";
import { render } from "@testing-library/react";
import { Task1, Task2, Task3 } from "./tasks";
import { act, screen, waitForElementToBeRemoved } from "@testing-library/react";

jest.mock("@chakra-ui/react", () => {
  const actualChakra = jest.requireActual("@chakra-ui/react");
  const {
    Box,
    Image,
    Text,
    SimpleGrid,
    Modal,
    ModalHeader,
    ModalBody,
    Button,
  } = actualChakra;

  return {
    ...actualChakra,
    Box: (props) => (
      <Box
        data-testid="box"
        data-mx={props.marginX}
        data-bg-color={props.bgColor}
        data-color={props.color}
        {...props}
      />
    ),
    Image: (props) => <Image data-testid="image" {...props} />,
    Text: (props) => <Text data-testid="text" {...props} />,
    SimpleGrid: (props) => (
      <SimpleGrid
        data-testid="simple-grid"
        data-columns={props.columns}
        data-gap={props.gap}
        {...props}
      />
    ),
    Modal: (props) => <Modal data-testid="modal" {...props} />,
    ModalHeader: (props) => (
      <ModalHeader data-testid="modal-header" {...props} />
    ),
    ModalBody: (props) => <ModalBody data-testid="modal-body" {...props} />,
    Button: (props) => <Button data-testid="button" {...props} />,
  };
});

const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

describe("Task1", () => {
  it("should render a Box", () => {
    const { container } = render(<Task1 property={property} />);
    expect(
      container.querySelector("[data-testid='box']").getAttribute("data-mx")
    ).toBe("auto");
    expect(
      container
        .querySelector("[data-testid='box']")
        .getAttribute("data-bg-color")
    ).toBe("blue.800");
    expect(
      container.querySelector("[data-testid='box']").getAttribute("data-color")
    ).toBe("white");
    expect(
      container.querySelector("[data-testid='image']").getAttribute("src")
    ).toBe(property.imageUrl);
  });
});

describe("Task2", () => {
  it("should render a SimpleGrid", () => {
    const properties = [...Array(10).fill(property)];
    const { container } = render(<Task2 properties={properties} />);
    expect(
      container
        .querySelector("[data-testid='simple-grid']")
        .getAttribute("data-columns")
    ).toBe("1,2,4");
    expect(
      container
        .querySelector("[data-testid='simple-grid']")
        .getAttribute("data-gap")
    ).toBe("14");
  });
});

describe("Task3", () => {
  it("should render a Modal", async () => {
    render(<Task3 title="Modal Title" body="Modal Body" />);
    //click button with "Open Modal" text
    const button = screen.getByText("Open Modal");
    await act(() => {
      button.click();
    });
    const modalBody = await screen.findByTestId("modal-body");
    expect(modalBody.textContent).toBe("Modal Body");
    const modalTitle = await screen.findByTestId("modal-header");
    expect(modalTitle.textContent).toBe("Modal Title");

    const closeButton = await screen.findByText("Close");
    await act(() => {
      closeButton.click();
    });

    await waitForElementToBeRemoved(() => screen.queryByTestId("modal-body"));

    expect(screen.queryByTestId("modal-body")).toBeNull();
  });
});
