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
				// :: WAY THREE OF 4 sending a obj of props::
				// return <Book book={book}/>

				//:: WAY 4 OF 4 using spread to send individual propdata::
				return <Book key={book.id} {...book}/>
			})}
		</section>
	);
}

// adding param to the components
// accessing a child like so
const Book = (props) => {
	// :: WAY THREE OF 4 receiving a obj of props ::
	// const { title, name, imgLink } = props.book 
	
	//:: WAY 4 OF 4 using spread to send individual prop data :: 
	// NOTE this can be also destructed at the param field !!!
	const { title, name, imgLink } = props

	return (
		<article className="book">
			<img src={imgLink} alt="img" />
			<h1>{title}</h1>
			<h4> {name}</h4>
		</article>
	);
}


//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
