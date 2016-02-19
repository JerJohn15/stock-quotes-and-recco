# stock-quotes-and-recco

Live demo app available at: http://rkiouak.com

Link to run demo on your local browser: http://localhost:8080

To read wiki go [here](https://github.com/JerJohn15/stock-quotes-and-recco/wiki)

#Description

A portfolio application designed to showcase features utilizing React JS and Node JS. Current features include:
- A Toy app for interacting with Yahoo Finance undocumented RESTful api (e.g. http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail)

- A currency converter using the [Open Exchange Rates Data REST API](https://openexchangerates.org/) with [money js](https://www.npmjs.com/package/money)

- A study tracker that increments the amount of hours spent studying upon clicking a button.

#Layout of Project

Below is the layout of the main parts of this project.

```javascript
stock-quotes-and-recco
src/
---js/
-------- components/
-----Views/ //These contain the views for each individual page
----Account/
--------CreateAccount.js//registration page
--------Login.js//login page
----Pages/
--------ExchangeRates.js//a currency converter
--------Home.js//the home page
--------StockList.js//buy and sell stocks
--------StudyTracker.js//logs amount of hours spent studying
--App.js//Backend for rendering each page
--NavigationBar.js//Navigation Bar for navigating each page
-Routes.js//routing paths for each component
index.html
test/
--ComponentsTest.js//tests for components
--serverTest.js//tests for server
--setup.js//jsdom configuration for ComponentsTest
.babelrc//required babel 6 file to run tests with mocha  
```


#Required Tools

This project currently supports the following languages: Javascript, React JS, Node JS, HTML, and CSS. In order to use Node JS you will have to install  [node ] (https://nodejs.org/en/).

If you desire a software to develop this project in, I suggest using the text-editor,  [Atom](https://atom.io/). You can customize whatever features you want to fit your development needs. I recommend the plugins: [tree-symbol-view](https://atom.io/packages/symbols-tree-view), [browser-plus](https://atom.io/packages/browser-plus)
, [react](https://atom.io/packages/react), and
[project-switcher](https://atom.io/packages/project-switcher).


#Project Setup

1) Make sure [node](https://nodejs.org/en/) (with npm) is installed.

2) Install webpack globally:``` npm install webpack -g```

3)  Go ahead and make a forked repository of the [original](https://github.com/Rkiouak/stock-quotes-and-recco) project. Then copy the link that link, 'cd' to your desired project location and run the following:

```javascript
git clone https://github.com/[your profile name]/stock-quotes-and-recco.git

cd [your profile name]stock-quotes-and-recco

npm install

npm start
```

Give the server a few minutes to download npm dependencies depending on your connection speed, you will eventually see a message saying 'Example app available at: http://localhost:8080'. This means you've pulled the project successfully and you can check the app at http://localhost:8080 from your browser.

**Note**: Windows users might get thrown an error about node not being able to find the 'server.js' file. As an alternative, you can run **'webpack && node server.js'**.

-If you want to sync your fork with the master repo, read [syncing a fork](https://help.github.com/articles/syncing-a-fork/).



###Running Tests

I've recently added a file in the test folder for testing components, but to get it to work properly, you will need to install the latest version of babel 6 and its presets: es2015, react, and stage-0. Also you need to update to the latest version of React (some of the peer dependencies require it).

```javascript

//install babel 6
npm install babel-core --save-dev

//install support for es6
npm install babel-preset-es2015 --save-dev

//install  support for jsx
npm install babel-preset-react --save-dev

// install es7 features
npm install babel-preset-stage-0 --save-dev

// install react.
npm install react

//once done, to run tests run this command from root of project:
mocha --require test/setup.js --compilers js:babel-register

```  

**References:**

- [Installing Babel 6 for mocha](https://babeljs.io/docs/setup/#mocha)
- [Testing in ES6](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/)
- [Testing with mocha](http://www.benjanecke.com/2015/11/30/so-you-want-to-test-your-react-code-with-mocha.html)

Also see **note** under 'Release v1.2' in the **Releases** section below.

#Releases

New Release features will be updated here.

###Release v2.1
- Renamed 'app.js' to 'Routes.js'
- Updated readme
- Created [wiki](https://github.com/JerJohn15/stock-quotes-and-recco/wiki/Login-and-Registration) for Demo 1 of  Login / Registration Feature

###Release v2.0
- Added demo 1 of Login / Registration Feature (Login and Registration views within a modal)
- Converted 'NavigationBar' and 'App' components to JSX (from ES6).
- Placed the Home page title and description from 'App' component into its own
component 'Home' (more on this in my upcoming [wiki section](https://github.com/JerJohn15/stock-quotes-and-recco/wiki).
- Added IndexRoute  to Routes.js
- Updated test, in 'serverTest.js', to reflect new title on home page.
- Reorganized Project Directory js files (see *Layout of Project* section)

To view demo of this feature go [here](http://i.giphy.com/xT0BKmlPnq0sxa0qpa.gif).(*buttons don't work yet, only the abilities to close the modal*)

**Note:**
- In order to run this recent update, you will need to install the most recent version of
react-router (currently 2.0.0).
- I've created a wiki which explains how I implemented this demo. You can read about it [here](https://github.com/JerJohn15/stock-quotes-and-recco/wiki/Login-and-Registration).

###Release v1.2
- Added tests for the 'ExchangeRates' component (see ComponentsTest in test folder).
  -  Changed test command in package.json
  - Added 'setup.js' file and 'ComponentsTest.js' to test folder
  - Added 'babelrc' file
- Made second input field in *ExchangeRates* file read only.
- Fixed <br> error in *ExchangeRates* file.

**Note:** In order to test components, you'll need to install [JSdom](http://stackoverflow.com/questions/33383146/test-with-reactjs-renderintodocument-keep-failed-due-to-required-dom) and [Babel 6](http://stackoverflow.com/questions/31278901/inconsistent-unexpected-token/31279942#31279942). (*See top of page for instructions on installing babel 6.*)


**Screenshot of test**


[componentsTest](http://s10.postimg.org/b5cfd4yyh/Untitled_picture.png)

###Release v1.1
- Added a test with mocha, for checking data from open exchange rates api (see bottom
  of serverTest.js file).


###Release v1
- **Update:** Working version of currency converter is up. ([view demo](http://i.giphy.com/l2JIbDg204EtIA33W.gif)).


#Todo List

**Stocks**
-1st stage: Build single page with form + results display that allows for querying stocks by symbol, issuer_name and various date ranges, eventually bring in d3 graphing of historical data.

-2nd stage: Query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

-Run tests from root directory with Mocha, run express server (e.g. local dev mode) with npm start.

**Login/ Registration**

- [X] 1st Demo: A modal, that opens up a login or registration page whenever the "login"
or "register" button is clicked from within the Navigation Menu.

- [ ] 2nd Demo: Display "login" and "register" buttons, when a user hasn't logged in (view 1), and "[user's name]" and "logout" buttons, once a user has logged in (view 2). The logout button should change the view back to the default view.

- [ ] 3rd Demo: Build a database (either mongodb or mysql) to store a user's profile and
credentials.

- [ ] 4th Demo: Add GUI to make modal and menus look better.

- [ ] Other: Create Tests for Login and Registration Features.


**Other**

- [ ] Create automated tests using selenium-webdriver and mocha
- [ ] Add some flux or redux
