import { useState } from "react";
import ChildComponent from "../ChildComponent/ChildComponent";

const ParentComponent = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>{text}</p>
      <ChildComponent onTextChange={handleTextChange} />
    </div>
  );
};

export default ParentComponent;
