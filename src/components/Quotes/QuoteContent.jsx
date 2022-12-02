import { AiOutlineTwitter } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import "./QuoteContent.css";

export default function QuoteContent({ quote, author, onChangeQuote, color }) {
  const [newQuote, setNewQuote] = useState(quote === null);
  let opacity;

  if (newQuote) {
    opacity = 0;
  } else {
    opacity = 1;
  }

  const handleClick = () => {
    onChangeQuote();
    setNewQuote(true);
    setTimeout(() => {
      setNewQuote(false);
    }, 1000);
  };

  return (
    <div className="quote-content">
      <div className="first-row">
        <span style={{ color: `${color}`, opacity: `${opacity}` }}>
          <FaQuoteLeft />
        </span>
        <p id="text" style={{ color: `${color}`, opacity: `${opacity}` }}>
          {quote}
        </p>
      </div>
      <p id="author" style={{ color: `${color}`, opacity: `${opacity}` }}>
        - {author}
      </p>

      <div className="second-row">
        <div className="social-media">
          <a
            href="twitter.com/intent/tweet"
            id="tweet-quote"
            style={{ background: `${color}` }}
          >
            <AiOutlineTwitter />
          </a>
        </div>
        <button
          id="new-quote"
          onClick={handleClick}
          style={{ background: `${color}` }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
