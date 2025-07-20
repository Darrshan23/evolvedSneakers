import { useState } from 'react';

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const intialCount = 10;
    return intialCount;
  });

  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      {count}
      <button onClick={add}>+</button>
    </div>
  );
};

export default ExampleOne;
