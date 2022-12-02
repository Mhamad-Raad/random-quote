import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuote = () => {
    const link = "https://type.fit/api/quotes";
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      });
  };

  useEffect(fetchQuote, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;

