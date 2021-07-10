import React from 'react';
import './App.css';
import QuoteComponent from './QuoteComponent';
import quotes from './QuoteDB';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      quote:quotes[0].quote,
      author:quotes[0].author,
    };
  }

  randomQuote(){
    const randomNum= Math.floor(Math.random()*quotes.length);
    return quotes[randomNum];
  }

  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState(
      {
        quote: generateRandomQuote.quote,
        author: generateRandomQuote.author
      }
    );
    this.shuffleQuotes(quotes)
  };


  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render(){
    return(
      <div className="main">
        <QuoteComponent displayColor={this.randomColor} handleClick={this.handleClick}
        {...this.state}
        />
      </div>
    );
  }
}
export default App;
