import React from "react";
import ReactDom from "react-dom";

// import / export ing modules
// named import
import { books } from "./books"
// default import
import Book from "./Book"

// :: CSS ::
import "./index.css";

//  :: SET UP VARS ::
// moved to books.js and importing above as a named import

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

{/*Book Component moved to Book.js*/}




//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
