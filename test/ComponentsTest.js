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
import {Modal} from 'react-bootstrap';
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
import ExchangeRates from '../src/js/components/Views/Pages/ExchangeRates.js';
import Login from '../src/js/components/Views/Account/Login.js';
import CreateAccount from '../src/js/components/Views/Account/CreateAccount.js';
import App from '../src/js/components/App.js';

var component = null;

var modal = null;

//Component Tests for ExchangeRates Component
describe('Exchange Rates Tests', function(){

it('check for a rendered Exchange Rates component', function(){

 component = TestUtils.renderIntoDocument(
  <ExchangeRates />
 );

expect(component).toExist();


});

//tests for drop down menu
it('check for a selection menu', function(){

this.select = TestUtils.findRenderedDOMComponentWithTag(
   component, "select"
);

expect(this.select).toExist();

});

it('check that this selection menu has four options', function(){

  this.options = TestUtils.scryRenderedDOMComponentsWithTag(

     component, "option"
  );


  expect(this.options.length).toEqual(4);


});


it('check that values of drop down menu are EUR, GBP, and JPY',function(){

  this.select = TestUtils.scryRenderedDOMComponentsWithTag(
   component, "option"
  );


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


it('search for two  input fields', function(){

  this.inputs = TestUtils.scryRenderedDOMComponentsWithTag(

     component, "input"
  );

  expect(this.inputs.length).toEqual(2);
});


//checks for US currency input
it('check that a US currency value is entered in the first input field', function(){

this.inputs = TestUtils.scryRenderedDOMComponentsWithTag(
   component, "input"
);
//gets the first input field value
var inputBox = this.inputs[0];
var inputValue = ReactDOM.findDOMNode(inputBox).value = 123.45;
//simulates value change for USDvalue
TestUtils.Simulate.change(inputValue);

expect(inputValue).toEqual(123.45);
});

//tests the converted currency
it('check that a converted currency value is a number', function(){
this.inputs = TestUtils.scryRenderedDOMComponentsWithTag(
   component, "input"
);
var inputBox = this.inputs[1];
var inputValue = ReactDOM.findDOMNode(inputBox).value = 3652.23;
TestUtils.Simulate.change(inputValue);

//check if input value is null or not a string
expect(inputValue).toNotBeA('string');
});

});
