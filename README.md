# stock-quotes-and-recco

Live demo app available at: http://rkiouak.com

Test your own version at: http://localhost:8080


#Description

A portfolio application designed to showcase features utilizing React JS and Node JS.

Current features include:
- A Toy app for interacting with Yahoo Finance undocumented RESTful api (e.g. http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail)

- A currency converter using the [Open Exchange Rates Data REST API](https://openexchangerates.org/) with [money js](https://www.npmjs.com/package/money)

- A study tracker that increments the amount of hours spent studying upon clicking a button.


#Required Tools

This project currently supports the following languages: Javascript, React JS, Node JS, HTML, and CSS. In order to use Node JS you will have to install  [node ] (https://nodejs.org/en/).

You can use any software you want to code this project in, but I recommend the text-editor,  [Atom](https://atom.io/).


#Project Setup

1) make sure [node](https://nodejs.org/en/) (with npm) is installed.

2) Install webpack globally:``` npm install webpack -g```

3)  Then, from terminal/command line 'cd' to your desired project location and run:
```npm
git clone https://github.com/Rkiouak/stock-quotes-and-recco.git

cd stock-quotes-and-recco
```
**Note** If your forking a version of this project, replace both the above URL and folder name with your specific name. (For syncing your fork with the Matt's master repo, please refer to [syncing a fork](https://help.github.com/articles/syncing-a-fork/) )
```npm
npm install && npm start
```

**Note**: Windows users might have to run 'webpack && node server.js', as an alternative,  instead of 'npm start', if you get
a  cannot find module error message.

Give the server a few minutes to download npm dependencies depending on your connection speed, you will eventually see a message saying 'Example app available at: http://localhost:8080'. This means you've pulled the project successfully and you can check the app at http://localhost:8080 from your browser.

**Note**: You'll need to run the above command each time you want to test out changes you've made to the project.  

Tests can be run with mocha installed via the cmd 'mocha' in the root directory of the project.

#Layout of Project

Below is the layout of the main parts of the project.

```javascript
stock-quotes-and-recco
js/
---- components/
-------- App.js//Home page
--------ExchangeRates.js//a currency converter
--------NavigationBar.js//Menu for the website
--------StockList.js//buy and sell stocks
--------StudyTracker.js//logs amount of hours spent studying
app.js//routing paths for each component
index.html
test/
--------exchangeTest.js//tests for exchange rates
--------serverTest.js//tests for server
```

#Releases

New Release features will be updated here.

###Release v1.1
- Added a test with mocha, for checking data from open exchange rates api (see bottom
  of serverTest.js file).

![exrates test1](http://s14.postimg.org/4dm6wj3fl/exchange_Rates_test1_Passed.png)


**Note:** Future tests as described in *Mocha Tests#2* are coming in a future update.
An unfinished version can be seen in the *tests* folder.  

###Release v1
- **Update:** Working version of currency converter is up. ([view demo](http://i.giphy.com/l2JIbDg204EtIA33W.gif)).


####Todo List

-1st stage/initial to-do build single page with form + results display that allows for querying stocks by symbol, issuer_name and various date ranges, eventually bring in d3 graphing of historical data.

-2nd stage query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

-Run tests from root directory with Mocha, run express server (e.g. local dev mode) with npm start.

- Add some flux or redux
- Update tests using mocha
 * Perform tests for the Exchange Rate's component using mocha and the recent Babel 6 release.

 *Mocha Tests#2*
 1) A value has been inputted in the *input field*.
 2) A value has been selected from the selection menu.
 3) Data from the API has been displayed on the screen.
