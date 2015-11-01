import React from "react";
import request from "request";

const stocks = ["AAPL", "GOOGL", "YHOO"];


var StockList = React.createClass({

  getInitialState: function() {
    return {selectedStockInfo:"none"}
  },

  gotStockData: function(stockData){
    this.setState({selectedStockInfo:stockData});
  },
  getSymbolDetails: function(event) {

    var symbol=event.target.id;
    var stockData = request("http://localhost:8080/"+symbol, function (error, response, body) {
      if(!error && response.statusCode ==200){
        console.log(JSON.stringify(body));
        this.setState({selectedStockInfo:body});
      }
      else{
        alert('Http request to yahoo threw error');
      }
    }.bind(this));
    console.log("setState: ", stockData);
    //this.setState({selectedStockInfo:stockData.response.body});
  },

  render(){
    return (
      <div>
        <h1>Stock List</h1>
        <ul>
          {stocks.map(stock =>
            <li key={stock} id={stock} onClick={this.getSymbolDetails}>{stock}</li>)}
            </ul>
            <h4>{JSON.stringify(this.state.selectedStockInfo)}</h4>
          </div>
        )
      }
    });

export default StockList
