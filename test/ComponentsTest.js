/**
*

 @Details - These tests are for each component class.
 Basic premise for each component:
 1) render
 2) Find specific part of data
 3) Verify the contents of that data
@author- JerJohn15
*/

import React from 'react';
//var request = require('supertest');
var assert = require('assert');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
import ExchangeRates from '../src/js/components/ExchangeRates.js';


describe('Testing Exchange Rates component...', function(){

it('should render ExchangeRates component', function(){

 this.exRates = TestUtils.renderIntoDocument(
  <ExchangeRates />
 );

expect(this.exRates).toExist();


});

//Working on this test
//it('should find select value', function(){



//var select = TestUtils.findRenderedDOMComponentWithTag(
//  this.exRates, "select"
//);

//TestUtils.Simulate.change(select.getDOMNode(), {target: {value: "EUR"}});

//expect(this.exRates.state.value).toEqual("EUR");
//});

it('should find Currency Exchange title', function(){
  var header = TestUtils.findRenderedDOMComponentWithTag(this.exRates,'h3' );

expect(header.textContent).toBe('Currency Exchange');
});
//Add other tests for ExchangeRates here.
//Working on this test
//it('should find input', function(){


//});

});
