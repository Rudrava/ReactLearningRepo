import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)

  const handleIncrease = () => {
  	setValue(value + 1)
  }

  const handleDecrease = () => {
  	setValue(value - 1)	
  }

  const handleReset = () => {
  	setValue(0)
  }

  return <>
  	<h2>Counter Example of state</h2>
  	<h1>{value}</h1>
  	<button className="btn" onClick={handleIncrease}>increase</button>
  	<button className="btn" onClick={handleDecrease}>decrease</button>
  	<button className="btn" onClick={handleReset}>reset</button>
  </>;
};

export default UseStateCounter;
