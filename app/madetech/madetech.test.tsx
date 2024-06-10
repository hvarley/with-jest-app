import { fireEvent, render, screen } from "@testing-library/react";
import Madetech from "./madetech";


it("Heading is present", () => {
  render(<Madetech />);
  expect(screen.getByTestId("test-h1")).toHaveTextContent("INTERVIEW KATA");
});

// it("Scoring is correct", () => {
//   render(<Madetech />);
//   expect(screen.getByTestId("test-score")).toHaveTextContent("0 - 0");
//   fireEvent.click(screen.getByTestId("test-button1"));
// });

