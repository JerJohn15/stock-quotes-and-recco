/**
*
This class handles the implementation of converting
US currency to foreign currency (vice-versa).

@author - JerJohn15
*
*/

import React from 'react';
import NavigationBar from './NavigationBar';
var fx = require("money");


var body = "Below is a currency converter, converting foreign currency to US dollars. (vice-versa)";
fx.base ="USD";
fx.settings = {
  from: "USD"
};


var ExchangeRates = React.createClass({
//setup the base and get the current exchange rates here.

 function getCurrency(){
  $.getJSON(
        //  using Open Exchange Rates here, but you can use any source!
          'http://finance.yahoo.com/d/quotes.csv?e=.csv&f=sl1d1t1&s=USDINR=X',
          function(data) {
              // Check money.js has finished loading:
              if ( typeof fx !== "undefined" && fx.rates ) {
                  fx.rates = data.rates;
                  fx.base = data.base;
              } else {
                  // If not, apply to fxSetup global:
                  var fxSetup = {
                      rates : data.rates,
                      base : data.base
                  }
              }

          }
      );
},
function calculateRates(currencyType){

var amount = document.getElementById("money").value;

if(amount){
  var input = document.getElementById(currencyType).value;

  this.currency = fx.convert(amount, {to: input});//public variable accessed outside of function

}else{
  alert("Please enter a value!");
}
},


render: function(){


return (
  <div>
<NavigationBar/>
  <p> {body}</p>
    <br>
    </br>
  <div>
  <form>
    <fieldset>
      <legend>Currency Exchange</legend>
      <label title = "Enter Price Here"> </label>
    <input  type = "text" id = "money" value = "1"></input>
    <br></br>
      <select id ="selection" onChange={this.calculateRates(this.value)}>
          <option value = "">select currency</option>
      <option value = "EUR">US-Euro</option>
          <option value = "GBP">US-Pound</option>
              <option value = "JPY">US-Yuan</option>
                  </select>
        <br></br>

<input type ="text" id = "foriegn" value = {this.currency}></input>

        <br></br>

    </fieldset>
  </form>
  </div>
</div>
);


}

});



export default ExchangeRates
