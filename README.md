# web-showcase

#Description

Formerly known as "stock-quotes-and-recco", this project is a portfolio to showcase ideas created using the React JS library on the front-end side. The server side currently used Node.js Current features include:

-  A sample stock purchasing application using the [Yahoo Finance undocumented RESTful api]( http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail) to retrieve stock data. 

- A [currency converter](http://s28.postimg.org/je9n6zsz1/Currency_Converter.gif) which converts a US currency into it's foriegn equivalent. (Uses  the [Open Exchange Rates Data REST API](https://openexchangerates.org/), to retrieve exchange rates, and  the [money js](https://www.npmjs.com/package/money) external library, to convert currencies.) 

- A study logger that increments the amount of hours spent studying when clicking a button.

See the **ToDo List** for upcoming features. Also, checkout the **Issues** section for current unresolved issues. In addition, there is a [wiki section](https://github.com/JerJohn15/stock-quotes-and-recco/wiki) which currently consists of a test plan, and a design plan of future features. 

To view the live demo of the original app use this link: http://rkiouak.com
Refer to the **Project Setup** section for launching the application from a local server.

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
--autoTests.js//automated tests with Selenium Webdriver
--ComponentsTest.js//tests for components
----serverTest.js//tests for server
--setup.js//jsdom configuration for ComponentsTest
.babelrc//required babel 6 file to run tests with mocha  
```


#Required Tools

This project currently supports the following languages: Javascript, React JS, Node JS, HTML, and CSS. In order to use Node JS you will have to install  the latest version of [node ] (https://nodejs.org/en/) .

#Project Setup

1) Make sure [node](https://nodejs.org/en/) (with npm) is installed.

2) Install webpack globally:``` npm install webpack -g```

3)  Go ahead and make a forked repository of the [original](https://github.com/Rkiouak/stock-quotes-and-recco) project. Then copy the link, 'cd' to your desired project location, and run the following:

```bash
git clone [your forked link]

cd [name of project]

npm install

npm start #or type webpack && node server.js
```

Give the server a few minutes to download npm dependencies depending on your connection speed, you will eventually see a message saying 'Example app available at: http://localhost:8080'. This means you've pulled the project successfully and you can check the app at http://localhost:8080 from your browser.

**Note**: Windows users might get thrown an error about node not being able to find the 'server.js' file. As an alternative, you can run ```bash **'webpack && node server.js'**.```

If you want to sync your fork with the master repo, read [syncing a fork](https://help.github.com/articles/syncing-a-fork/).

###Running Tests

Since **Release v.022** I've added automated tests using  selenium web driver, so you'll need to install it in order to properly
run tests:  

```bash

# first install react.
npm install react

# then install selenium-webdriver
npm install selenium-webdriver

# once done, to run tests run this command from root of project:
mocha --require test/setup.js --compilers js:babel-register

```  

For reference, see  **note** under **Release v.012** in the [Old Releases](https://github.com/JerJohn15/stock-quotes-and-recco/tree/master/docs) section.


#Releases

New Release features will be updated here. To view past releases see [old releases](https://github.com/JerJohn15/stock-quotes-and-recco/tree/master/docs).

##Release v.026
- Moved *serverTests.js* back into **test** folder.
- Updated README *ToDo List*.

**Note:** The *serverTests.js* file will eventually be removed in a future release, as the tests performed within it are no longer necessary now that Selenium is being used.

Go [here](http://s17.postimg.org/uh7fshz33/selenium_v2_51.png) to view a screenshot of the tests with the included *serverTest.js* file.  

##Release v.025
- Added Screenshot of the Currency Converter feature (see hyperlink in *Description* section).

###Release v.024
- Improved wording for each test case in autoTest and ComponentsTest
- Made composite tests out of cases where multiple assertions were declared

To view screen shot of revised test cases go [here](http://s8.postimg.org/qdocicuqt/selenium_v2_4.png)

###Release v.023
- Changed syntax for searched elements in **autoTests**.
- Added new docs sections for OLD RELEASES
- Updated Wiki

###Release v.022
- Added more tests this time with Selenium !!! (*see autoTest.js in Test folder*)
- Added **className** and **ID** tag names for the input, button, and link fields within the *Exchange Rates*, *StockList*, *NavigationBar*, ..., etc. files (These are needed to perform some of the tests).
- Removed some of the routing paths in 'Routes.js'.
- Removed 'register' button from **Login** file.

~~To view screenshot of passing tests go [here](http://s11.postimg.org/6vhiszr8z/selenium_tests_v2_2.png).~~

**Note:** I've kept the TDD tests just for those who want to see them. Will probably remove them in a future release.

Regarding the routing paths, I found out that each page can be navigated with the path names removed (Probably overlooked something. Will need to look through source code).

Currently, the selenium tests performed just navigate to each page from the Navigation Bar from a closed web browser (FireFox). These tests will be enhanced in future releases.



###Release v.021
- Renamed 'app.js' to 'Routes.js'
- Updated README
- Created [wiki](https://github.com/JerJohn15/stock-quotes-and-recco/wiki/Login-and-Registration) for Demo 1 of  Login / Registration Feature

To download this release go [here](http://www.megafileupload.com/apoF/v2.0stock-quotes-and-recco-master.zip).

###Release v.020
- Added demo 1 of Login / Registration Feature (Login and Registration views within a modal)
- Converted 'NavigationBar' and 'App' components to JSX (from ES6).
- Placed the Home page title and description from 'App' component into its own
component 'Home' (more on this in my upcoming [wiki section](https://github.com/JerJohn15/stock-quotes-and-recco/wiki).
- Added IndexRoute  to Routes.js
- Updated test, in 'serverTest.js', to reflect new title on home page.
- Reorganized Project Directory js files (see *Layout of Project* section)

To view demo of this feature go [here](http://i.giphy.com/xT0BKmlPnq0sxa0qpa.gif). (*buttons don't work yet, only the abilities to close the modal*)

**Note:**
- In order to run this recent update, you will need to install the most recent version of
react-router (currently 2.0.0).
- I've created a wiki which explains how I implemented this demo. You can read about it [here](https://github.com/JerJohn15/stock-quotes-and-recco/wiki/Login-and-Registration).


#Todo List

**Stocks**

- [X] 1st stage: Build single page with form + results display that allows for querying stocks by symbol, issuer_name and various date ranges, eventually bring in d3 graphing of historical data.

- [ ] 2nd stage: Query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

- [X] Run tests from root directory with Mocha, run express server (e.g. local dev mode) with 'npm start' or 'webpack && node server.js'.

**Login/ Registration**

- [X] 1st Demo: A modal, that opens up a login or registration page whenever the "login"
or "register" button is clicked from within the Navigation Menu.

- [ ] 2nd Demo: Display "login" and "register" buttons, when a user hasn't logged in (view 1), and "[user's name]" and "logout" buttons, once a user has logged in (view 2). The logout button should change the view back to the default view.

- [ ] 3rd Demo: Build a database (either mongodb or mysql) to store a user's profile and
credentials.

- [ ] 4th Demo: Add GUI to make modal and menus look better.

- [ ] Other: Create/ Update Tests for Login and Registration Features.


**Bugs**
- [ ] Convert relevant tests in *serverTests.js* inside *autoTests.js* and remove *serverTests.js* folder.
- [ ] Add the ability to run tests with an open web browser.



**Other**

- [X] Create automated tests using selenium-webdriver and mocha
- [ ] Add Action Sequences, or event changes, to Selenium tests.
- [ ] Add the ability to run tests with an open web browser.
- [ ] Add more features and incorporate an advanced application architecture (flux, redux, ..., etc.) in place of the current one.

###Contributors:

- [JerJohn15](https://github.com/JerJohn15)
- [Rkiouak](https://github.com/Rkiouak)
