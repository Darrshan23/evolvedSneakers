import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={add}>Add 1</button>
    </div>
  );
};

export default Counter;
