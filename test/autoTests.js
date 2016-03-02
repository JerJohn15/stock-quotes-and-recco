  /**
  *@author - JerJohn15
  This file contains the automation tests with selenium.
  Tests to be performed follow this sequence:

  1) Navigate to a page

  2) Check for existing elements on page (button, input, ... etc)

  3) Perform Action Sequences

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

  it('Home Page should be navigated to.', function(){

    pagetitle = driver.findElement(By.linkText('Stock Quotes and Recco Toy App'));
    expect(pagetitle).toExist();

  });


  it('header should be NavigationBar', function(){

  var header = driver.findElement(By.className('NavBar'));

  expect(header).toExist();

  });


  it('StocksList Page should be navigated to and have title.', function(){

   pagepath = driver.findElement(By.className('StocksPage'));
  driver.actions()
    .mouseMove(pagepath)
    .click()
    .perform();

  expect(driver.findElement(By.className('Stocks'))).toExist();

  });



  });

  describe('Stock List Page', function(){
  var stock;
    it('page should have title.', function(){

      pagetitle = driver.findElement(By.linkText('Stock List'));

      expect(pagetitle).toExist();
    });

    it('should have an input field, a button, and stocks', function(){

      expect(driver.findElement(By.id('stockInput'))).toExist();
      expect(driver.findElement(By.id('stockButton'))).toExist();
      expect(driver.findElements(By.id('stocksButton'))).toExist();
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

  it('should navigate to Study page', function(){
    pagepath = driver.findElement(By.className('StudyPage'));
    driver.actions()
    .mouseMove(pagepath)
    .click()
    .perform();

    pagetitle = driver.findElement(By.linkText('Study Tracker'));

    expect(pagetitle).toExist();
  });


  });

  describe('Study Tracker Page', function(){


    it('should have a button', function(){

      expect(driver.findElement(By.id('trackerButton'))).toExist();
    });


    it('should navigate to Exchange Rates page', function(){
      pagepath = driver.findElement(By.className('ExRatesPage'));
      driver.actions()
      .mouseMove(pagepath)
      .click()
      .perform();

      pagetitle = driver.findElement(By.linkText('Currency Exchange'));

      expect(pagetitle).toExist();
    });
  });


  describe('Exchange Rates Page', function(){

    it('should have a selection menu and two input fields', function(){
      expect(driver.findElement(By.id('USDvalue'))).toExist();
      expect(driver.findElement(By.id('selection'))).toExist();
      expect(driver.findElement(By.id('Foreignvalue'))).toExist();
    });



    it('should navigate back to the Home page', function(){
      pagepath = driver.findElement(By.className('HomePage'));
      driver.actions()
      .mouseMove(pagepath)
      .click()
      .perform();

      pagetitle = driver.findElement(By.linkText('Stock Quotes and Recco Toy App'));

      expect(pagetitle).toExist();
    });
  });
  //Tests for Login and Registration Forms here.
