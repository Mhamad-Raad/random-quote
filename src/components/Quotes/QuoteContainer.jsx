import QuoteContent from "./QuoteContent";
import "./QuoteContainer.css";

export default function QuoteContainer(props) {
  
  return (
    <div id="quote-box">
      <QuoteContent
        quote={props.quote?.text}
        author={props.quote?.author}
        onChangeQuote={props.onChangeQuote}
        color={props.color}
      />
    </div>
  );
}
