import React from "react";
import { useState } from "react";
import { getNewQuote, tweetQuote } from "./QuoteBoxFunctions";
export class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="quote-box">
				<QuoteText />
				<QuoteAuthor />
				<TweetButton />
				<NewQuoteButton />
			</div>
		);
	}
}

class QuoteText extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <p id="text">Text</p>;
	}
}

class QuoteAuthor extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <p id="author">Author</p>;
	}
}

class NewQuoteButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button type="button" id="new-quote" onClick={getNewQuote}>
				New Quote
			</button>
		);
	}
}

class TweetButton extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<a id="tweet-quote" target="_blank" rel="noreferrer" onClick={tweetQuote}>
				<button type="button" id="tweet-quote">
					Tweet Quote
				</button>
			</a>
		);
	}
}
