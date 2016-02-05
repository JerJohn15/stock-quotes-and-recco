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
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
import ExchangeRates from '../src/js/components/ExchangeRates.js';

//Component Tests for ExchangeRates Component
describe('Testing Exchange Rates component...', function(){

it('should render ExchangeRates component', function(){

 this.exRates = TestUtils.renderIntoDocument(
  <ExchangeRates />
 );

expect(this.exRates).toExist();


});

//tests for drop down menu
it('should have a drop-down menu and 4 option values', function(){

this.select = TestUtils.findRenderedDOMComponentWithTag(
  this.exRates, "select"
);

this.options = TestUtils.scryRenderedDOMComponentsWithTag(

  this.exRates, "option"
);

expect(this.select).toExist();
expect(this.options.length).toEqual(4);

});
//check for all values within the menu
it('values of drop down menu should be EUR, GBP, and JPY',function(){

  this.select = TestUtils.scryRenderedDOMComponentsWithTag(
    this.exRates, "option"
  );

//Its unecessary to check all of the values  but I wanted to learn the ternary op
var target = ' ';
var options = this.select;
for( var i = 0; i<options.length;i++)
{
//if options is EUR set target to EUR ... else if options is GBP set to GBP... else
  target = (options[i] == 'EUR')?"EUR":
  ((options[i] == 'GBP')? "GBP":
 ((options[i] == 'GBP')? "JPY":
    ""));

var optionValue = ReactDOM.findDOMNode(options[i]).value = target;
TestUtils.Simulate.change(optionValue);
expect(optionValue).toEqual(target);
}


});

//tests for input fields
it('input should exist and have two input fields', function(){

  this.inputs = TestUtils.scryRenderedDOMComponentsWithTag(

    this.exRates, "input"
  );

  expect(this.inputs).toExist();
  expect(this.inputs.length).toEqual(2);
});

//checks for US currency input
it('should save US currency input', function(){

this.inputs = TestUtils.scryRenderedDOMComponentsWithTag(
  this.exRates, "input"
);
//gets the first input field value
var inputBox = this.inputs[0];
var inputValue = ReactDOM.findDOMNode(inputBox).value = 123.45;
//simulates value change for USDvalue
TestUtils.Simulate.change(inputValue);

expect(inputValue).toEqual(123.45);
});

//tests the converted currency
it('converted currency should be a number', function(){
this.inputs = TestUtils.scryRenderedDOMComponentsWithTag(
  this.exRates, "input"
);
var inputBox = this.inputs[1];
var inputValue = ReactDOM.findDOMNode(inputBox).value = 3652.23;
TestUtils.Simulate.change(inputValue);

//check if input value is null or not a string
expect(inputValue).toNotBeA('string');
});



});
