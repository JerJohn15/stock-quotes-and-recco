#Old Releases


###Release v1.2
- Added tests for the 'ExchangeRates' component (see **ComponentsTest** in test folder).
  -  Changed test command in package.json
  - Added **'setup.js'** file and **'ComponentsTest.js'** to test folder
  - Added **'babelrc'** file
- Made second input field in *ExchangeRates* file read only.
- Fixed **br** error in *ExchangeRates* file.

**Note:** In order to test components, you'll need to install [JSdom](http://stackoverflow.com/questions/33383146/test-with-reactjs-renderintodocument-keep-failed-due-to-required-dom) and [Babel 6](http://stackoverflow.com/questions/31278901/inconsistent-unexpected-token/31279942#31279942). (*See top of page for instructions on installing babel 6.*)


**Screenshot of test**


[componentsTest](http://s10.postimg.org/b5cfd4yyh/Untitled_picture.png)

###Release v1.1
- Added a test with mocha, for checking data from open exchange rates api (see bottom
  of serverTest.js file).


###Release v1
- **Update:** Working version of currency converter is up. ([view demo](http://i.giphy.com/l2JIbDg204EtIA33W.gif)).
