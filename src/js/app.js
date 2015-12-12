import React from "react";
import ReactDOM from "react-dom";
import StockList from "./components/StockList";
import ExchangeRates from "./components/ExchangeRates";
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
/**
*@author - JerJohn15
@details - Added in routing for exchange rates page.
*
*/
ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
    <Route path="stocks" component={StockList} />
    <Route path = "ExRates" component={ExchangeRates} />
  </Router>, document.getElementById('root'));
