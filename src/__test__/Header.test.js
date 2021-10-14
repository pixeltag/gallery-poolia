
import { render, screen } from "@testing-library/react";
import Header from "./../layout/Header";

test("Header component renders correctly and has Logo text", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Poolia Gallery/i);
  expect(linkElement).toBeInTheDocument();
});





