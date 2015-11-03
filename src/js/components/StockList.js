import React from "react";
import request from "superagent";
import { Accordion, Panel, Table, Label, Jumbotron } from 'react-bootstrap';
const stocks = ["AAPL", "GOOGL", "YHOO"];


var StockList = React.createClass({

  getInitialState: function() {
    return {selectedStockInfo:"none"}
  },

  gotStockData: function(stockData){
    this.setState({selectedStockInfo:stockData});
  },
  getSymbolDetails: function(stock) {
    if(this.state.selectedStockInfo.symbol!==stock){
    var symbol=stock;
    console.log(symbol);
        var stockData = request.get("/"+symbol).send().end( function (error, resp, body) {
      if(!error && resp.statusCode ==200){
        console.log(JSON.stringify(resp.body));
        this.setState({selectedStockInfo:resp.body});
      }
      else{
        alert('Http request to yahoo threw error');
      }
    }.bind(this));
  }
  else{
    return;
  }
  },

  render(){
    console.log(this.state.selectedStockInfo.symbol);
    console.log(this.state.selectedStockInfo.symbol==stocks[0]);
    return (
          <Jumbotron>
            <h2><Label bsStyle="primary">Stock List</Label></h2>
          {
            stocks.map((stock, count) =>
            <Panel header={stock} key={stock} id={stock} eventKey={count} onClick={()=>{this.getSymbolDetails(stock)}}>
              {this.state.selectedStockInfo.symbol==stock?(
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Issuer</th>
                      <th>Symbol</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.selectedStockInfo.issuer}</td>
                      <td>{this.state.selectedStockInfo.symbol}</td>
                      <td>{this.state.selectedStockInfo.price}</td>
                    </tr>
                  </tbody>
                </Table>):""}
            </Panel>)}
        </Jumbotron>
        )
      }
    });

export default StockList
