import React from "react";
import ReactDom from "react-dom";

// :: CSS ::
import "./index.css";

//  :: SET UP VARS ::
const books = [
	{
		id: 1,
		title : "I don't know",
		name : "Rudrava Mukherjee",
		imgLink : "https://via.placeholder.com/150"
	},
	{
		id: 2,
		title : "I still don't know",
		name : "Rudra",
		imgLink : "https://via.placeholder.com/150"
	},
	{
		id: 3,
		title : "When Would i  know asd asda asd assd",
		name : "Rudraasd",
		imgLink : "https://via.placeholder.com/150"
	},
	{
		id: 4,
		title : "Fuck it i'll never know",
		name : "Rudra",
		imgLink : "https://via.placeholder.com/150"
	}
]

//BOOK list COMPONENT
function BookList() {
	return (
		<section className="bookList">
			{books.map((book) => {
				return <Book key={book.id} {...book}/>
			})}
		</section>
	);
}

//Book Component

const Book = ({ title, name, imgLink }) => {
	// accessing the event obj as a param
	// const clickHandler = (e) => {
	// 	console.log(e)
	// }

	// this funtion getting invoked on page load due to its calling way
	// const clickHandler = (e) => {
	// 	console.log(e)
	// }

	// this function getting invoked when event is happening due to call method
	const clickHandler = (e) => {
		console.log(e)
	}
	return (
		// setting up event
		// normal handler call from an event
		// <article className="book" onClick={clickHandler}>

		// passing param to a handler does not invoke as it is in the return statement of a arrow funct (here)
		<article className="book" onClick={() => clickHandler(title)}>
			<img src={imgLink} alt="img" />
			<h1>{title}</h1>
			<h4> {name}</h4>
		</article>
	);
}


//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
