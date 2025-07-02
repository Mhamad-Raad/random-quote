import { AiOutlineTwitter } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './QuoteContent.css';

export default function QuoteContent({ quote, author, onChangeQuote, color }) {
  const [visible, setVisible] = useState(true);
  const [displayedQuote, setDisplayedQuote] = useState(quote);
  const [displayedAuthor, setDisplayedAuthor] = useState(author);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        onChangeQuote();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [visible, onChangeQuote]);

  useEffect(() => {
    if (quote && author) {
      setDisplayedQuote(quote);
      setDisplayedAuthor(author);
      setVisible(true);
    }
  }, [quote, author]);

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div className='quote-content'>
      <div className='first-row'>
        <span
          style={{
            color: color,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s',
          }}
        >
          <FaQuoteLeft />
        </span>
        <p
          id='text'
          style={{
            color: color,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s',
          }}
        >
          {displayedQuote}
        </p>
      </div>
      <p
        id='author'
        style={{
          color: color,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      >
        - {displayedAuthor === null ? 'Unknown' : displayedAuthor}
      </p>

      <div className='second-row'>
        <div className='social-media'>
          <a
            href='https://twitter.com/intent/tweet'
            id='tweet-quote'
            style={{ background: color }}
          >
            <AiOutlineTwitter />
          </a>
        </div>
        <button
          id='new-quote'
          onClick={handleClick}
          style={{ background: color }}
          disabled={!visible}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
