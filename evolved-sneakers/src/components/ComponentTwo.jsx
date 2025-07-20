import React from 'react';

const ComponentTwo = () => {
  const handleClick = () => onClickHandler();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ComponentTwo;
