import React from "react";
import { useState } from "react";

import "./App.css";

const text = document.querySelector("#text");
const author = document.querySelector("#author");
const buildURL = `https://twitter.com/intent/tweet/text=${text} - ${author}`;

function QuoteText() {
	return <p id="text">Text</p>;
}

function QuoteAuthor() {
	return <p id="author">Author</p>;
}

function NewQuoteButton() {
	return (
		<button
			type="button"
			id="new-quote"
			className="btn btn-primary"
			onClick={getNewQuote}
		>
			New Quote
		</button>
	);
}

function TweetButton() {
	return (
		<button type="button" className="btn btn-primary">
			<a
				id="tweet-quote"
				target="_blank"
				rel="noreferrer"
				onClick={tweetQuote}
				href={buildURL}
			>
				Tweet Quote
			</a>
		</button>
	);
}

export async function getNewQuote() {
	let response;
	const text = document.querySelector("#text");
	const author = document.querySelector("#author");
	response = await fetch(
		"https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
	);
	const data = await response.json();
	console.log(data);
	const q = data[0].content.rendered;
	const a = data[0].title.rendered;
	//const { q, a } = data;
	text.innerHTML = q;
	author.textContent = a;
}

function tweetQuote() {
	const twitterIntent = document.querySelector("#tweet-quote");
	const text = document.querySelector("#text");
	const author = document.querySelector("#author");
	const tweetURL = `https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`;
	twitterIntent.setAttribute("href", tweetURL);
	//	return tweetURL;
}

export function QuoteBox() {
	return (
		<div className="container" id="quote-box">
			<QuoteText />
			<QuoteAuthor />
			<div id="buttons" className="container">
				<TweetButton />
				<NewQuoteButton />
			</div>
		</div>
	);
}
