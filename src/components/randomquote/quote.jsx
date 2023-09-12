import React, { useState } from 'react'
import './randomquote.css'
import reload_icon from '../assets/reload.png'
import twitter_icon from '../assets/twitter.png'

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    content: "Perhaps one did not want to be loved so much as to be understood",
    author: "George Orwell",
  });

  let quotes = []
  async function loadQuotes() {
    const res = await fetch("https://api.quotable.io/quotes/random")
    quotes = await res.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(select)
  }

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`)
  }


  loadQuotes();

  return (

    < div className='container'>
      <div className="quote">{quote.content}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">{quote.author}</div>
        <div className="icons">
          <img src={reload_icon} onClick={() => {
            random()
          }} alt="reload" />
          <img src={twitter_icon} onClick={() => {
            twitter()
          }} alt="twitter" />
        </div>
      </div>
    </div>
  )
}

export default RandomQuote