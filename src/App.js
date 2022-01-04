import React, { useEffect } from 'react';
import './App.css';

function QuoteBox({ quote }) {
  return (
    <div className="quote-box">
      <div id='text'>
        {quote.content}
      </div>
      <div id='author'>
        {quote.author}
      </div>
      <div id='new-quote'>
        <button>New Quote</button>
      </div>
      <a href='' id='tweet-quote'>Tweet!</a>
    </div>
  )
}

function App() {

  const [quote, setQuote] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          setQuote(result);
        }
      )
  }, []);



  return (
    <div className="App">
      <QuoteBox
        quote={quote}
      />
    </div>
  );
}

export default App;
