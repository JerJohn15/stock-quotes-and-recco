  /**
  *@author - JerJohn15
  This file contains the automation tests with selenium.
  Tests to be performed follow this sequence:

  1) Navigate to a page

  2) Check for existing elements on page (button, input, ... etc)

  3) Go to the next page and repeat process.

   Note: Each page is verified to exist by checking for, either its div classname or id.
  , or its page title.
  Tests are performed from within FireFox web browser.
  */
  var expect = require('expect');
  //configure selenium webdriver
  var webdriver = require('selenium-webdriver'),
      By = require('selenium-webdriver').By,
      until = require('selenium-webdriver').until;



  var driver;
  var pagepath;
  var pagetitle;

  before(function(){
  //  this.timeout(20000);
  //configures the browser type and local server
    driver = new webdriver.Builder()
      .forBrowser('firefox')
      .usingServer('http://localhost:8080')
      .build();
  //  driver.manage().window().maximize();
  });

  after(function(){
  //exit out driver
  driver.quit();

  });

  describe('HomePage Tests', function(){

  it('Search for the HomePage Title', function(){

    pagetitle = driver.findElement({linkText:'Stock Quotes and Recco Toy App'});
    expect(pagetitle).toExist();

  });


  it('Search for existing Navigation Bar header by searching div, NavBar', function(){

  var header = driver.findElement({className: 'NavBar'});

  expect(header).toExist();

  });


  it('Navigate to StocksPage by clicking on link, StockPage.', function(){

   pagepath = driver.findElement({className: 'StocksPage'});
  driver.actions()
    .mouseMove(pagepath)
    .click()
    .perform();

  expect(driver.findElement({className: 'Stocks'})).toExist();

  });



  });

  describe('Stock List Page', function(){
  var stock;
    it('Check for StockList page title.', function(){

      pagetitle = driver.findElement({linkText: 'Stock List'});

      expect(pagetitle).toExist();
    });

    it('Locate the input field', function(){
      expect(driver.findElement({id: 'stockInput'})).toExist();
    });

    it('Locate the BUY button', function(){
      expect(driver.findElement({id: 'stockButton'})).toExist();
    });

    it('Locate all stock options', function(){
      expect(driver.findElements({id: 'stocksButton'})).toExist();
    });
/**
//This test currently does not work.
    it('should access GOOGL stock ', function(){
      //search for GOOGL stock and click on button
      stock = driver.findElement({linkText:'GOOGL'});

        expect(driver.findElement({linkText:'GOOGL'})).toEqual('GOOGL');

      driver.actions()
      .mouseMove(stock)
      .click()
      .perform();


      //check for stock header, sell button,  table fields and data.
      expect(driver.findElement(By.className('sellRef'))).toExist();
      expect(driver.findElement(By.className('stock_header'))).toExist();
      expect(driver.findElement(By.className('Issuer'))).toExist();
      expect(driver.findElement(By.className('Symbol'))).toExist();
      expect(driver.findElement(By.className('Price'))).toExist();

      expect(driver.findElement(By.id('IssuerData'))).toExist();
      expect(driver.findElement(By.id('SymbolData'))).toExist();
      expect(driver.findElement(By.id('PriceData'))).toExist();


    });
    **/
  /**
  //This test currently does not work
    it('should sell GOOGL stock', function(){


          //looks for the 'Sell' button
          stock = driver.findElement(By.className('sellRef'));

          driver.actions()
          .mouseMove(stock)
          .click()
          .perform();

           expect(driver.findElement(By.className('sellRef'))).toNotExist();
    });
  **/

  it('Navigate to Study Page by clicking on its link', function(){
    pagepath = driver.findElement({className: 'StudyPage'});
    driver.actions()
    .mouseMove(pagepath)
    .click()
    .perform();

    pagetitle = driver.findElement({className: 'StudyTracker'});

    expect(pagetitle).toExist();
  });


  });

  describe('Study Tracker Page', function(){


    it('Locate the button', function(){

      expect(driver.findElement({id: 'trackerButton'})).toExist();
    });


    it('Navigate to the Exchange Rates Page by clicking on its link', function(){
      pagepath = driver.findElement({className: 'ExRatesPage'});
      driver.actions()
      .mouseMove(pagepath)
      .click()
      .perform();

      pagetitle = driver.findElement({linkText: 'Currency Exchange'});

      expect(pagetitle).toExist();
    });
  });


  describe('Exchange Rates Page', function(){

    it('Locate the selection menu', function(){
      expect(driver.findElement({id: 'selection'})).toExist();
    });

    it('Locate the input field for US currency', function(){
      expect(driver.findElement({id: 'USDvalue'})).toExist();
    });

    it('Locate the input field for foreign currency', function(){

      expect(driver.findElement({id: 'Foreignvalue'})).toExist();
    });

    it('Navigate back to the Home Page by clicking on its link', function(){
      pagepath = driver.findElement({className: 'HomePage'});
      driver.actions()
      .mouseMove(pagepath)
      .click()
      .perform();

      pagetitle = driver.findElement({linkText: 'Stock Quotes and Recco Toy App'});

      expect(pagetitle).toExist();
    });
  });
  //Tests for Login and Registration Forms here.
