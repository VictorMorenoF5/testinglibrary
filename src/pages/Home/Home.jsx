import React from "react";
import Button from "../../components/Button/Button";
import Counter from "../../components/Count/Counter";
import ParentComponent from "../../components/ParentComponent/Parentcomponent";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button />
      <Counter />
      <ParentComponent />
    </div>
  );
}

export default Home;
