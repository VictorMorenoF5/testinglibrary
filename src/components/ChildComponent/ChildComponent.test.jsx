import { render, screen, fireEvent } from "@testing-library/react";
import ChildComponent from "./ChildComponent";

describe("ChildComponent", () => {
  test("debería renderizar el componente chil", () => {
    render(<ChildComponent />);
  });
});
