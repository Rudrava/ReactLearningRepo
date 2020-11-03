import React, {useState} from 'react';
import {data as peoplesData}  from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = useState(peoplesData)
	const [btn, setBtn] = useState("kill all people")

	const handleBtn = () => {
		setPeople(people === peoplesData ? [] : peoplesData)
		setBtn(btn === "kill all people" ? "revive All people" : "kill all people")
	}
  return (
  	<>
  		{
  			people.map((person) => {
				const {id, name} = person
					return (
						<div key={id} className="item">
							<h4>
								{name}
							</h4>
							<button className="btn">
								{"kill " + name}
							</button>
						</div>
					) 
				})
  		}
  		<button className="btn" onClick={handleBtn}>
  			{btn}
  		</button>
		</>
  	);
};

export default UseStateArray;
