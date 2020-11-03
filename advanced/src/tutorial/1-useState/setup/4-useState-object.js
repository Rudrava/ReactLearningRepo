import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Rudra",
		age: 19,
		message: "Worlds not a good place to live in !!!",
	})

	const handleClick = () => {
		setPerson( person.message === "Worlds not a good place to live in !!!" ? {...person, message: "Hello World tho!!!"} : {...person, message: "Worlds not a good place to live in !!!"})
	}
  return <> 
  	<h2>{person.name}</h2>
  	<h2>{person.age}</h2>
  	<h2>{person.message}</h2>
  	<button className="btn" onClick={handleClick}>change message</button>
  </>
};

export default UseStateObject;
