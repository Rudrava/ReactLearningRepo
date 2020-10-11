import React from "react";
import ReactDom from "react-dom";

// :: CSS ::
import "./index.css";

//BOOK list COMPONENT
function BookList() {
	return (
		<section className="bookList">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

// Book component
const Book = () => (
	<article className="book">
		<BookImg />
		<BookName />
		<Author />
	</article>
);

const BookImg = () => <img src="https://via.placeholder.com/150" alt="img" />;

const BookName = () => <h1>I dont know</h1>;

// :: inline styled component ::
const Author = () => <h4 style={{ color: "#617d98" }}> Rudrava Mukherjee</h4>;

//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
