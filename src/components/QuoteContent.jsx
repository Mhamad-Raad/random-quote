import { AiOutlineTwitter } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import "./QuoteContent.css";

export default function QuoteContent({ quote, author }) {
  return (
    <div className="quote-content">
      <div className="first-row">
        <span>
          <FaQuoteLeft />
        </span>
        <p id="text">{quote}</p>
      </div>
      <p id="author">- {author}</p>

      <div className="second-row">
        <div className="social-media">
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            <AiOutlineTwitter />
          </a>
        </div>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}
