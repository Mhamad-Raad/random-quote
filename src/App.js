import { useEffect, useState } from "react";

import QuoteContainer from "./components/Quotes/QuoteContainer";
import PageAuthor from "./components/PageAuthor";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = () => {
    const link = "https://type.fit/api/quotes";
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        setQuote(data[index]);
      });
  };

  useEffect(fetchQuote, []);

  let color;

  if (quote?.text.length % 2) {
    color = 'red';
  }

  console.log(quote.text.length);

  return quote === null ? (
    <p>loading...</p>
  ) : (
    <div className="App" style={{background: color}}>
        <QuoteContainer quote={quote} onChangeQuote={fetchQuote}/>
      <PageAuthor />
    </div>
  );
}

export default App;


