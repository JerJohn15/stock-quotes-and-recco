# stock-quotes-and-recco

Live demo app available at: http://rkiouak.com

link to run demo on your local browser: http://localhost:8080


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
```javascript
git clone https://github.com/Rkiouak/stock-quotes-and-recco.git

cd stock-quotes-and-recco
```
**Note** If your forking a version of this project, replace both the above URL and folder name with your specific name. (For syncing your fork with the Matt's master repo, please refer to [syncing a fork](https://help.github.com/articles/syncing-a-fork/) )
```javascript
npm install && npm start
```

**Note**: Windows users might have to run 'webpack && node server.js', as an alternative,  instead of 'npm start', if you get
a  cannot find module error message.

Give the server a few minutes to download npm dependencies depending on your connection speed, you will eventually see a message saying 'Example app available at: http://localhost:8080'. This means you've pulled the project successfully and you can check the app at http://localhost:8080 from your browser.

**Note**: You'll need to run the above command each time you want to test out changes you've made to the project.  

###Running Tests

I've recently added a file in the test folder for testing components, but in order for them to work you will need to install the latest version of babel 6 and its presets: es2015, react, and stage-0. You'll also need to update your version of react (some of the peer dependencies require the latest version), and perhaps mocha as well.

```javascript

//install babel 6
npm install babel-core --save-dev

//install support for es6
npm install babel-preset-es2015 --save-dev

//install  support for jsx
npm install babel-preset-react --save-dev

// install es7 features
npm install babel-preset-stage-0 --save-dev

// install react. (do the same for mocha)
npm install react

//once done, to run tests run this command from root of project:
mocha --require test/setup.js --compilers js:babel-register

```  

**References:**

- [Installing Babel 6 for mocha](https://babeljs.io/docs/setup/#mocha)
- [Testing in ES6](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/)
- [Testing with mocha](http://www.benjanecke.com/2015/11/30/so-you-want-to-test-your-react-code-with-mocha.html)

Also see **note** under *release v1.2* in the *Releases* section below.
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

###Release v1.2
- Added tests for the 'ExchangeRates' component (see ComponentsTest in test folder).
  -  Changed test command in package.json
  - Added setup.js file and ComponetsTest files to test folder
  - Added babelrc file
- Made second input field in *ExchangeRates* file read only.
- Fixed br error in *ExchangeRates* file.

**Note:** I had to make some major changes to the project in order for me to test components. In particular, I needed to install jsdom, and upgrade to babel 6. See top of page for instructions on installing babel 6. Having to install JSdom was a result of [this](http://stackoverflow.com/questions/33383146/test-with-reactjs-renderintodocument-keep-failed-due-to-required-dom) error while Babel 6 was a result of [this method](http://stackoverflow.com/questions/31278901/inconsistent-unexpected-token/31279942#31279942) not working for me).

I'm using the expect package to run my assertions, so you'll also need to install that.

**Screenshot of test**


![componentsTest](http://s10.postimg.org/b5cfd4yyh/Untitled_picture.png)

###Release v1.1
- Added a test with mocha, for checking data from open exchange rates api (see bottom
  of serverTest.js file).


###Release v1
- **Update:** Working version of currency converter is up. ([view demo](http://i.giphy.com/l2JIbDg204EtIA33W.gif)).


####Todo List

-1st stage/initial to-do build single page with form + results display that allows for querying stocks by symbol, issuer_name and various date ranges, eventually bring in d3 graphing of historical data.

-2nd stage query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

-Run tests from root directory with Mocha, run express server (e.g. local dev mode) with npm start.

- Create automated tests
- Add some flux or redux
