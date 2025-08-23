// useRef() is a React hook for holding a mutable reference (to DOM or value) 
// that persists across renders without causing re-renders.

// What useRef() is used for

// 1. Accessing DOM elements directly (like focusing an input, measuring size).

// 2. Storing mutable values that don’t trigger re-renders when changed (like a variable counter, timeout ID).

// 3. Remembering values between renders without re-rendering the component.

import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();  // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
