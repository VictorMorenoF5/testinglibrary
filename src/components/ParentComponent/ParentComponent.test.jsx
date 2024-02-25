import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "./ParentComponent";

describe("ParentComponent", () => {
  test("debería renderizar el componente padre", () => {
    render(<ParentComponent />);
    const inputElement = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(inputElement, { target: { value: "Hola Mundaco" } });
    fireEvent.click(submitButton);
    const updatedText = screen.getByText(/Hola Mundaco/i);
    expect(updatedText).toBeInTheDocument();
  });
});
