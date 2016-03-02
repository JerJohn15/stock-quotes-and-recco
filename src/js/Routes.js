import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Views/Pages/Home"
import StockList from "./components/Views/Pages/StockList";
import ExchangeRates from "./components/Views/Pages/ExchangeRates";
import StudyTracker from "./components/Views/Pages/StudyTracker";
import App from './components/App';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

/**
*@author - JerJohn15, Matt
@details - Added in routing for exchange rates page.
Added IndexRoute for Home. (So, now when App is rendered the Home component
is also rendered, as its child).
*/


ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component = {Home}/>
    //  <Route path="stocks" component={StockList} />
    //  <Route path="study" component={StudyTracker} />
    //  <Route path = "ExRates" component={ExchangeRates} />
      </Route>

  </Router>, document.getElementById('root'));
