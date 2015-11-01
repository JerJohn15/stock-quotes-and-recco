# stock-quotes-and-recco

#Project Setup

npm install


npm start

#Description

Toy app for interacting with Yahoo Finance undocumented RESTful api (e.g. http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail)

1st stage/initial to-do build single page with form + results display that allows for querying stocks by symbol, issuer_name and various
date ranges, eventually bring in d3 graphing of historical data.

2nd stage query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

Run tests from root directory with Mocha, run express server (e.g. local dev mode) with npm start.
