import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// varibels
const bookList = [
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/91Tdu1LUcZL._AC_UL200_SR200,200_.jpg',
		tital: 'Fault Lines: The Social Justice Movement and…',
		author: 'Voddie T. Baucham Jr.'
	},
	{
		img: 'https://images-na.ssl-images-amazon.com/images/I/81RuAzKrHkL._AC_UL200_SR200,200_.jpg',
		tital: 'The 5 Love Languages: The Secret to Love…',
		author: 'Gary Chapman'
	}
];

function Book() {
	return (
		<section className="book">
			{bookList.map((book) => {
				return <Books book={book} />;
			})}
		</section>
	);
}

const Books = (props) => {
	const { img, tital, author } = props.book;
	return (
		<article className="books">
			<img src={img} alt="" />
			<h1>{tital}</h1>
			<p>{author}</p>
		</article>
	);
};
ReactDom.render(<Book />, document.getElementById('root'));
