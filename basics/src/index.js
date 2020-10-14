// dependency import
import React from "react";
import ReactDom from "react-dom";

// components import
import { books } from "./books"
import Book from "./Book"

// css import
import "./index.css";

function BookList() {
	return (
		<section className="bookList">
			{books.map((book) => {
				return <Book key={book.id} {...book}/>
			})}
		</section>
	);
}

// Book Component moved to Book.js*

//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
