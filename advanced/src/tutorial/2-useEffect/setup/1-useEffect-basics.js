import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0)
	const [name, setName ]  = useState("hi")
 	
 	// uncomment the second param to [value] which wold trigger this following useEffect on change / re render on value change of "value" at this poing ti tirggers on evety re render as nothing is set as a second param 
 	useEffect( () => { 
		value > 0 ? document.title = `Chatolita (${value}) ` : document.title =  "Chatolita"
		console.log("not rando");
	}, /*[value]*/)


 	// this was made to see that if we comment any sencond param it renders any how to check ::uncomment a [value] param to the first useEffect and check the logs ::
	useEffect( () => {
		console.log('Rando');
	})

	// the followind use Effect would take efffect on initial render as an empty arrray :: [] :: as the second param
	useEffect( () => {
		console.log('Hellow World');
	}, [])

// at this point logs every console log change the code as directed to see the diff !!!

		console.log("rerender")
	return (
		<>
			<h1>{name} {value}</h1>
			<button className="btn" onClick={() => setValue(value+1)}>Click Me</button>
			<button className="btn" onClick={() => setName (name === "hi" ? "hekkoo" : "hi")}> Random Button</button>
		</>
	)
};

export default UseEffectBasics;
