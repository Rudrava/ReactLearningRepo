// importing react as we are making components
import React from "react"

// default export NOTE:: only one per file and do not need to worry bout the name while importing as it is a default

const Book = ({ title, name, imgLink }) => {
	const clickHandler = (e) => {
		console.log(e)
	}
	return (
		<article className="book" onClick={() => clickHandler(title)}>
			<img src={imgLink} alt="img" />
			<h1>{title}</h1>
			<h4> {name}</h4>
		</article>
	);
}

export default Book
// exportin here