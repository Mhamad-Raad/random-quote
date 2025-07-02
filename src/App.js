import { useEffect, useState } from 'react';

import QuoteContainer from './components/Quotes/QuoteContainer';
import PageAuthor from './components/PageAuthor';
import './App.css';

function App() {
  const colors = [
    '#574141',
    '#414257',
    '#417541',
    '#714157',
    '#41576A',
    '#6A5741',
    '#417174',
  ];
  let color = '';
  const [quote, setQuote] = useState(null);

  const fetchQuote = () => {
    const link = 'https://api.api-ninjas.com/v1/quotes';
    fetch(link, {
      method: 'GET',
      headers: {
        'X-Api-Key': '0NeEeIGn0v4y0D4S+jNPbA==l8YNseDTRqOcSdvm',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(...data);
      });
  };

  useEffect(fetchQuote, []);

  const randomIndex = Math.floor(Math.random() * colors.length);
  color = colors[randomIndex];

  return (
    <div className='App' style={{ background: color }}>
      <QuoteContainer quote={quote} onChangeQuote={fetchQuote} color={color} />
      <PageAuthor />
    </div>
  );
}

export default App;
