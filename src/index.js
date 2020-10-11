import React from "react"
import ReactDom from "react-dom"

// :: COMPONENT UNDER THE HOOD OF JSX ::
// const Greeting = () => {
// 	return React.createElement(
// 		'div',
// 		{},
// 		React.createElement(
// 			"h1",
// 			{}, 
// 			"hello world"))
// }

// :: COMPONENT WITH JSX ::
// function Greeting () {
// 	return ( 
// 			<div>
// 				<h1>This is Rudrava</h1>
// 				<p>This is my non-splitted component</p>
// 			</div>
// 	)
// }



// :: SPLITTING UP COMPONENTS ::
function Greeting () {
	return ( 
			<div>
				<Name/>
				<Message/>
			</div>
	)
}

// :: splitted componenets ::
const Name = () => <h1>This is Rudrava</h1>
const Message = () => {
	return <p>This is my non-splitted component</p>
}

// :: renderer ::
ReactDom.render(<Greeting/>, document.getElementById('root'))
