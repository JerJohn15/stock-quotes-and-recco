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
var accounting = require("accounting");
// CSS for Exchange Rates page
const styles = {}

styles.body = {

  backgroundcolor: '#00ff00'
}

styles.title  = {

  padding: '20px',
  paddingTop:'10px',
  fontFamily:'Abril Fatface'
}



//Set the base currency and conversion
fx.base ="USD";
fx.settings = {
  from: "USD"
};
fx.rates = {

"USDEUR" : 0.9202,
"USDGBP" : 0.6715,
"USDJPY" : 121.1400,
"USD" : 1

}
// currency account settings
accounting.settings = {
currency: {
  symbol: "$",
  format: "$s%v",
  precision: 2

},
number: {
  precision: 0,
  decimal: "."
}

};

var ExchangeRates = React.createClass({


 accessAPI: function (){
  $.getJSON(
        //  using yahoo finance api

      //  'http://openexchangerates.org/latest.json',
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
getInitialState: function(){
  return {moneyValue: ' ',
        currencyType: ' ',
        convertedCurrency: ' '};
},

//sets the amount
setAmount: function(event){
   this.setState({moneyValue: event.target.value});
},

// Check if amount has been inputted by user, and get the converted currency. Otherwise, show error.
calculateRates: function (event){
if(this.state.moneyValue){//check if amount has been inputed by user
//  this.amount = accounting.formatNumber(this.amount);
//alert(this.state.moneyValue);
   this.setState({currencyType: event.target.value});
  var currency = fx.convert(this.state.moneyValue, {to: this.state.currencyType});
  this.setState({convertedCurrency: currency});//sets converted currency
}else{
  alert("Please enter a value!");
}
},


render: function(){

var description = "Below is a currency converter, converting foreign currency to US dollars. (vice-versa)";

var currency = this.state.convertedCurrency;


return (
  <div>
<NavigationBar/>
    <br>
    </br>
  <div>
  <form>
    <fieldset>
      <legend styles = {styles.title}>Currency Exchange</legend>
        <br>
        </br>
        <p> {description}</p>
      <label className = "Enter Price Here"> </label>
    <input  type = "text" id = "money"
      defaultValue = {this.state.moneyValue} onChange = {this.setAmount}>
    </input>
    <br>
    </br>
      <select id ="selection" defaultValue =
        {this.state.currencyType} onChange={this.calculateRates}>
          <option value = "">select currency</option>
      <option value = "USDEUR">US-Euro</option>
          <option value = "USDGBP">US-Pound</option>
              <option value = "USDJPY">US-Yuan</option>
                  </select>
        <br>
        </br>

<input type ="text" id = "foriegn" defaultValue = {currency}></input>

        <br>
        </br>

    </fieldset>
  </form>
  </div>
</div>
);


}

});



export default ExchangeRates
