# stock-quotes-and-recco

Live demo app available at: http://rkiouak.com

#Recommended Readings

This project currently supports the following languages: Javascript, React JS, Node JS, HTML, and CSS. If your unfamilar with Javascript, React, and Node, I suggest the following resources:

* [Eloquent Javascript](http://eloquentjavascript.net/) - *If your new to Javascript, this Ebook is a great way to get started as it covers basic Javascript fundamentals as well as introduces Node JS and React JS. The website also contains the source code of all of the examples within the book, as well as the ability to download the book as a pdf for offline use.* 

* [Build with React](http://buildwithreact.com/)  - *This website goes through the basic fundamentals and contains pratice exercises with solutions.*

* [Learning React JS](https://scotch.io/tutorials/learning-react-getting-started-and-concepts) - *Like Build with React, this website has a series of tutorials on React fundamentals, but towards the end of the series, it walks you through building larger applications like a basic mobile app using Reapp.*

* [Official React Getting Started Tutorial](https://facebook.github.io/react/docs/tutorial.html)



#Required Tools

This project currently supports the following languages: Javascript, React JS, Node JS, HTML, and CSS. In order to use Node JS you will have to install  [node ] (https://nodejs.org/en/). 

You can use any IDE you want to code this project in, but I recommend [Atom](https://atom.io/). Like many IDEs, Atom comes with the ability to view a browser screen from within the program. To do this in Atom, go to 'Edit -> Settings -> Packages' and type in and install 'browser-plus'.




#Project Setup

1) make sure [node](https://nodejs.org/en/) (with npm) is installed.

2) Install webpack globally: npm install webpack -g

3)  Then, from terminal/command line 'cd' to your desired project location and run:
>
git clone https://github.com/Rkiouak/stock-quotes-and-recco.git &&
>
cd stock-quotes-and-recco &&

**Note** If your forking a version of this project, replace both the above URL and folder name with your specific name. (For syncing your fork with the Matt's master repo, please refer to [syncing a fork](https://help.github.com/articles/syncing-a-fork/) )
>
npm install && npm start


**Note**: Windows users might have to run 'webpack && node server.js', as an alternative,  instead of 'npm start', if your get
a 'Error: Cannot find module ... server.js' error message.

Give the server a few minutes to download npm dependencies depending on your connection speed, you will eventually see a message saying 'Example app available at: http://localhost:8080'. This means you've pulled the project successfully and you can check the app at http://localhost:8080 from your browser.

Tests can be run with mocha installed via the cmd 'mocha' in the root directory of the project.

#Description

Toy app for interacting with Yahoo Finance undocumented RESTful api (e.g. http://finance.yahoo.com/webservice/v1/symbols/AAPL/quote?format=json&view=detail)

1st stage/initial to-do build single page with form + results display that allows for querying stocks by symbol, issuer_name and various
date ranges, eventually bring in d3 graphing of historical data.

2nd stage query google news for recent news articles, allow news link sharing and different timespan horizon recommendations (day/week, few months, long-term hold)

Run tests from root directory with Mocha, run express server (e.g. local dev mode) with npm start.
