import React from "react";
import ReactDom from "react-dom";

// :: CSS ::
import "./index.css";

//  :: SET UP VARS ::
const firstBook = {
	title : "I don't know",
	name : "Rudrava Mukherjee",
	imgLink : "https://via.placeholder.com/150"
}

const secondBook = {
	title : "I still don't know",
	name : "Rudra",
	imgLink : "https://via.placeholder.com/150"
}

//BOOK list COMPONENT
function BookList() {
	return (
		<section className="bookList">
			<Book 
				title = { firstBook.title } 
				name = { firstBook.name }
				imgLink= { firstBook.imgLink }
			>
			<p>
		{/*this is a child*/}
				非法汉化版搜索奇迹一
				次国语经销商不需要帮
				我报价试验邮箱，打。
			</p>	

			</Book>
			<Book 
				title = { secondBook.title } 
				name = { secondBook.name }
				imgLink= { secondBook.imgLink }
			/>
		</section>
	);
}

// adding param to the components
// accessing a child like so
const Book = ({ title, name, imgLink, children}) => {
	return (
		<article className="book">
			<img src={imgLink} alt="img" />
			<h1>{title}</h1>
			<h4> {name}</h4>
			<p> {children} </p>
		</article>
	);
}


//:: renderer ::
ReactDom.render(<BookList />, document.getElementById("root"));
