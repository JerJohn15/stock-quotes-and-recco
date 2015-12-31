import React from "react";
import ReactDOM from "react-dom";
import StockList from "./components/StockList";
import ExchangeRates from "./components/ExchangeRates";
import ratesAPI from "./components/ExchangeRates";
import {Router, Route,IndexRoute,RouteHandler} from 'react-router';
import App from './components/App';
/**
*@author - JerJohn15
@details - Added in routing for exchange rates page.
*and IndexRouting for child component of ratesAPI
*/
ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
      <Route path="stocks" component={StockList} />
        <Route path = "ExRates" component={ratesAPI} >
              <IndexRoute  component={ExchangeRates} />
              </Route>
  </Router>, document.getElementById('root'));
