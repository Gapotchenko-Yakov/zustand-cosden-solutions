import React, { useEffect, useState } from "react";
import "./App.css";
import { useCounterStore } from "./store";

function logCount() {
  const count = useCounterStore.getState().count;
  console.log(count);
}

function App() {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
}

const OtherComponent = (props: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, []);

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
        <button className="buttons__button" onClick={incrementAsync}>
          increment async
        </button>
      </div>
    </div>
  );
};
export default App;
