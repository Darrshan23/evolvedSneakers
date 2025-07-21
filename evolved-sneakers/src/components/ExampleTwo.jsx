import { useState } from 'react';

const ExampleTwo = () => {
  const [randomNum, setRandomNum] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const newNumber = () => {
    setRandomNum(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      Random number: {randomNum}
      <button onClick={newNumber}>Generate a new random number</button>
    </div>
  );
};

export default ExampleTwo;
