import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <OtherComponent count={count} />;
}

const OtherComponent = (props: { count: number }) => {
  return <h1>{props.count}</h1>;
};
export default App;
