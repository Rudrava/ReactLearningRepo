import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('')
	const [isErr, setIsErr] =useState(false)
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	return(
	<>
		{/*<h1>{firstValue}</h1>
				<h1>val: {secondValue}</h1>*/}
		<h1>{text || "john hoe"}</h1>
		{!text && <h1>Hello</h1>}
		<button className="btn" onClick={() => setIsErr(!isErr)}>toggle Err</button>
		{isErr ? <h1>Err...</h1> : <h1>no err</h1>} 
	</>
	)
};

export default ShortCircuit;
