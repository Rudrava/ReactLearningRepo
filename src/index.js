import React from "react";
import ReactDom from "react-dom";

// :: CSS ::
import "./index.css";

//BOOK list COMPONENT
function BookList() {
	return (
		<section className="bookList">
			<Book />
		</section>
	);
}

// Book component
const Book = () => {
	// :: normal js here ::
	const title = "I dont know"
	const name = "Rudrava Mukherjee"
	return (
		<article className="book">
			<img src="https://via.placeholder.com/150" alt="img" />
			{/* :: ADDING  JS VARIABLE INSIDE JSX :: */}
			<h1>{title}</h1>
			<h4> {name}</h4>
			
			{/*:: err ::*/}
			{/* <h4> {name = "someone"}</h4> */}
		</article>
	);
}


//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
