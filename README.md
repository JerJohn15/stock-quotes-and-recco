# stock-quotes-and-recco

Live demo app available at: http://rkiouak.com

#Project Setup
make sure node (with npm) is installed.

Then, from terminal/command line run:

git clone https://github.com/Rkiouak/stock-quotes-and-recco.git &&

cd stock-quotes-and-recco &&

npm install && npm start

Give the server a few minutes to download npm dependencies depending on your connection speed, you will eventually see a message saying 'Example app available at: http://localhost:8080'. This means you've pulled the project successfully and you can check the app at http://localhost:8080 from your browser.

Tests can be run with mocha installed via the cmd 'mocha' in the root directory of the project.

#Description

Toy app for interacting with Yahoo Finance undocumented RESTful api (e.g. http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail)

1st stage/initial to-do build single page with form + results display that allows for querying stocks by symbol, issuer_name and various
date ranges, eventually bring in d3 graphing of historical data.

2nd stage query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

Run tests from root directory with Mocha, run express server (e.g. local dev mode) with npm start.
