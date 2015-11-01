import React from "react";

const stocks = ["AAPL", "GOOGL", "YHOO"];


var StockList = React.createClass({

  render(){
    return (
      <div>
        <h1>Stock List</h1>
        <ul>
          {stocks.map(stock =>
          <li key={stock}>{stock}</li>)}
        </ul>
      </div>
      )
  }
});

export default StockList
