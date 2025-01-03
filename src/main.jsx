import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QuoteBox } from "./QuoteBox.jsx";
import { getNewQuote } from "./QuoteBox.jsx";

window.addEventListener("load", () => {
	getNewQuote();
});
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QuoteBox />
	</StrictMode>,
);
