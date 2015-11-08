import React from "react";
import request from "superagent";
import { Button, ButtonToolbar, Accordion, Panel, Table, Label, Jumbotron } from 'react-bootstrap';
import Sparkline from 'd3-react-sparkline';

const stocks = ["AAPL", "GOOGL", "YHOO"];


var StockList = React.createClass({

  getInitialState: function() {
    return {selectedStockSymbol:"",selectedStockInfo:"none", selectedStockHistorical:[]}
  },

  getSymbolDetails: function(stock) {
    if(this.state.selectedStockInfo.symbol!==stock){
      request.get("/"+stock).send().end( function (error, resp, body) {
        if(!error && resp.statusCode ==200){
          console.log(JSON.stringify(resp.body));
          this.setState({selectedStockSymbol:stock,selectedStockInfo:resp.body});
        }
        else{
          alert('Http request to yahoo threw error');
        }
      }.bind(this));

      request.get("/"+stock+"/historical").send().end(function (error, resp, body){
        if(!error && resp.statusCode==200){
          this.setState({selectedStockHistorical:{data:resp.body, stock:stock}});
        }
        else{
          console.log("error: ", error);
          alert("historical endpoint failed");
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
      <div>
        <h2><Label bsStyle="primary">Stock List</Label></h2>
        <ButtonToolbar>
          {stocks.map(stock =>
            <Button bsStyle="primary" bsSize="small" onClick={()=>{this.getSymbolDetails(stock)}}>{stock}</Button>
          )}
        </ButtonToolbar>
        <br/>
        {stocks.map((stock, count) =>
          <Panel header={stock} key={stock} id={stock} eventKey={count} onClick={()=>{this.getSymbolDetails(stock)}}>
            {this.state.selectedStockInfo.symbol==stock?(
              <div>
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
                </Table>
                {this.state.selectedStockHistorical.stock==stock?(
                  <Sparkline data={this.state.selectedStockHistorical.data.reverse()}
                    width={400}
                    height={240}>
                  </Sparkline>):""}
                </div>
              ):""}
            </Panel>)}
          </div>
        )
      }
    });

    export default StockList
