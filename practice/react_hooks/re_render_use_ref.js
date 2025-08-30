import { useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;  // Updates without causing re-render

  return (
    <div>
      <p>Button clicked: {count} times</p>
      <p>Component rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

// Note: renderCount.current stores how many times the component re-rendered.
// Updating it does not trigger another render, unlike useState.