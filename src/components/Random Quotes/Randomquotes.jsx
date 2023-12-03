import React, { useState } from "react";
import "./Randomquotes.css";
import Twitter_icon from "../Assets/twitter.png";
import Reload_icon from "../Assets/reload.png";

const Randomquotes = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    author: "Lorem, ipsum dolor.",
  });
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  loadQuotes();
  return (
    <div className="container">
      <div className="quotes">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">~ {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src={Reload_icon}
              onClick={() => {
                random();
              }}
              alt="reload icon"
            />
            <img
              src={Twitter_icon}
              onClick={() => {
                twitter();
              }}
              alt="twitter icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Randomquotes;
