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
    color = "#574141";
  } else if (quote?.text.length % 3) {
    color = "#414257";
  }

  return (
    <div className="App" style={{ background: color }}>
      <QuoteContainer quote={quote} onChangeQuote={fetchQuote} color={color} />
      <PageAuthor />
    </div>
  );
}

export default App;

