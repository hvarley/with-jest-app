import { fireEvent, render, screen } from "@testing-library/react";
import Madetech from "./madetech";


it("Heading is present", () => {
  render(<Madetech />);
  expect(screen.getByTestId("test-h1")).toHaveTextContent("INTERVIEW KATA");
});

it("User rents a scooter is correct", () => {
  render(<Madetech />);
  expect(screen.getByTestId("scooters-hired")).toHaveTextContent("Scooter hired: false");
  fireEvent.click(screen.getByTestId("test-button1"));
  expect(screen.getByTestId("scooters-hired")).toHaveTextContent("Scooter hired: true");
});

