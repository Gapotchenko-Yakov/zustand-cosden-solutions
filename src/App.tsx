import React, { useState } from "react";
import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
}

const OtherComponent = (props: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <h1>{props.count}</h1>
      <div className="buttons">
        <button className="buttons__button" onClick={decrement}>
          decrement
        </button>
        <button className="buttons__button" onClick={increment}>
          increment
        </button>
      </div>
    </div>
  );
};
export default App;
