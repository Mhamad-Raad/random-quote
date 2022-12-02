import { useEffect, useState } from "react";

import QuoteContainer from './components/QuoteContainer';
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuote = () => {
    const link = "https://type.fit/api/quotes";
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log('here');
        setQuotes(data);
      });
  };

  useEffect(fetchQuote, []);

  const Quote = Math.floor(Math.random() * quotes.length);
  console.log(quotes[Quote]);
  return quotes.length === 0 ? (
    <p>loading...</p>
  ) : (
    <div className="App">
      <QuoteContainer quote={quotes[Quote]} />
    </div>
  );
}

export default App;



