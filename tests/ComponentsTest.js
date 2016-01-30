/**
*
Note: This class is a work in progress. Do not move from folder.
 These tests are for each component class.

@author- JerJohn15
*/

//jsdom is called before using react
var jsdom = require('jsdom');
//generate fake dom and window
const fake_DOM = '<!doctype html><html><body></body></html>';
global.document = jsdom.jsdom(fake_DOM);
global.window = document.parentWindow;


var React = require('react');
//var request = require('supertest');
var expect = require('expect');
var ExchangeRates = require('../src/js/components/ExchangeRates.js');
//const EXRatesFactory = React.createFactory(ExchangeRates);
var TestUtils = require('react-addons-test-utils');

describe('Testing Exchange Rates component...', function(){

it('should render ExchangeRates component', function(){


 var exRates = TestUtils.renderIntoDocument(
  <ExchangeRates />
 );

expect(exRates).toExist();

//var myPar = TestUtils.findRenderedDOMComponentWithTag(exRates,'h3' );

//assert.equal(myPar.textContent,'Currency Exchange' );
});
//Add other tests for ExchangeRates here. 


});
