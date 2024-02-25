import { useState } from "react";

const ChildComponent = ({ onTextChange }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = () => {
    onTextChange(text);
  };

  return (
    <div>
      <h2>Children Component</h2>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChildComponent;
