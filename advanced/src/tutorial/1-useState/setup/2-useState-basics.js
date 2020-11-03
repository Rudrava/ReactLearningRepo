import React, { useState } from 'react';

const UseStateBasics = () => {
	let [title, setTitle] = useState("jello xorld")
	const handleClick = () => {
		setTitle(title === "jello xorld" ? "Hello World" : "jello xorld")
	}
  return (
  	<>
  		<div className="container">
  			<h2>
  				{title}
  			</h2>
  			<button className="btn" onClick={handleClick}>
  				Change Title
  			</button>
  		</div>
  	</>
  	);
};
console.log()

export default UseStateBasics;
