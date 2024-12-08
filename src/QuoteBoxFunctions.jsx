export async function getNewQuote() {
	const text = document.querySelector("#text");
	const author = document.querySelector("#author");
	const response = await fetch(
		`https://corsproxy.io/?${encodeURIComponent("https://api.viewbits.com/v1/zenquotes?mode=random")}`,
	);
	const data = await response.json();
	const { q, a } = data[0];
	text.textContent = q;
	author.textContent = a;
}

export function tweetQuote() {
	const twitterIntent = document.querySelector("#tweet-quote");
	const text = document.querySelector("#text");
	const author = document.querySelector("#author");
	const tweetURL = `https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`;
	twitterIntent.setAttribute(
		"href",
		`https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`,
	);
	//	return tweetURL;
}
