import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Test del componente Counter", () => {
  test("Renderizar Counter verificación solo texto", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");
    const count = screen.getByText("0");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  test("Incrementar el contador", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const count = screen.getByText(/Count: 0/i);
    fireEvent.click(incrementButton);
    expect(count).toHaveTextContent("1");
  });
});