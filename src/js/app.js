import React from "react";
import ReactDOM from "react-dom";
import StockList from "./components/StockList";
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="stocks" component={StockList} />
    </Route>
  </Router>, document.getElementById('root'));
