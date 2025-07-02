import QuoteContent from './QuoteContent';
import './QuoteContainer.css';

export default function QuoteContainer({ quote, onChangeQuote, color }) {
  console.log('QuoteContainer', quote);
  return (
    <div id='quote-box'>
      <QuoteContent
        quote={quote?.quote}
        author={quote?.author}
        onChangeQuote={onChangeQuote}
        color={color}
      />
    </div>
  );
}
