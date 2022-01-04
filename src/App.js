import React, { useEffect } from 'react';
import './App.css';

function QuoteBox({ quote, count, fetchQuote }) {


  return (
    <div id="quote-box">
      <div id='text'>
        {quote.content}
      </div>
      <div id='author'>
        {quote.author}
      </div>
      <div id='new-quote'>
        <button onClick={() => fetchQuote(count+1)}>New Quote</button>
      </div>
      <a href={`https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`} id='tweet-quote'>Tweet!</a>
    </div>
  )
}

function App() {

  const [quote, setQuote] = React.useState({});
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          setQuote(result);
        }
      )
  }, [count]);

  const fetchQuote = () => {
    const newQuote = [...quote];
    setQuote(newQuote);
  }

  return (
    <div className="App">
      <QuoteBox
        quote={quote}
        count={count}
        fetchQuote={setCount}
      />
    </div>
  );
}

export default App;
