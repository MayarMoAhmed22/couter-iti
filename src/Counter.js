import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const [showWord, setShowWord] = useState(true);
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    const toggleWord = () => {
      setShowWord(!showWord);
    };
  
    return (
      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Counter: {count}</h2>
        {showWord && <p style={{ fontSize: '18px' }}>welcome </p>}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={toggleWord}>hide</button>
      </div>
    );
  }
  export default Counter;