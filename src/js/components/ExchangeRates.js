/**
*
 This class converts US currency into a foreign currency (currently, EUR, JPY, BPD).
The exchange rates are taken from the open exchange rates API. - https://openexchangerates.org/
'Money JS' is used for retrieving the exchange rates and calculating the currency.
'accounting js' will be used in a future release for formatting the money values.
@author - JerJohn15
*
*/

import React from 'react';
import NavigationBar from './NavigationBar';
var fx = require("money");
var $ = require("jquery");
//Not using yet - var accounting = require("accounting");

// CSS for Exchange Rates page
const styles = {}

styles.outerBox = {
  paddingTop: '100px',
  paddingBottom: '200px',
  paddingRight: '900px',
  paddingLeft: '100px'

}

styles.exchangeBox = {

margin: 'auto',
position: 'fixed',
width: '250px',
paddingLeft: '50px',
paddingRight: '50px',
height: '180px',
border: '1px solid black',
backgroundColor: '#C0C0C0'

}

styles.body = {

  backgroundcolor: '#00ff00'
}

styles.title  = {

  fontFamily:'Abril Fatface',
  textAlign: 'left',
  paddingLeft: '30px',
  paddingTop:'10px',
}

styles.descript = {

fontFamily: 'fantasy, cursive, Arial',
textAlign: 'left',
padding: '20px',
paddingTop:'10px'
}

styles.dropMenu = {

paddingLeft: '15px',
 paddingRight: '15px'

}
/**
Money JS settings for the base currency and rates
*/
var fxSetup = {

base: "USD",
rates: {
//these rate values will be loaded if ones from server don't work.
"EUR" :  0.916333,
"GBP" :  0.670885,
"JPY" : 121.164,
"USD" : 1

}
};


fx.settings = {
  from: "USD"
};



/**
This component handles the data displays the user interface for this page
*/

var ExchangeRates = React.createClass({

  getInitialState: function(){
    return {USDvalue: ' ',
          convertedCurrency: ' ',
          rtname: ' '
        };
  },


//sets the inputed US dollar amount
setAmount: function(event){
   this.setState({USDvalue: event.target.value});
},

//sends out the request from the API and retrieves its data
handleRequest: function(type){

//want to get the object from a json string
  $.getJSON(
        //  using yahoo finance api
         'https://openexchangerates.org/api/latest.json?app_id=f7beb6b41bde4fabaa01f5bd5e459d8c',
        function(data) {
              // Check money.js has finished loading:
              if ( typeof fx !== "undefined" && fx.rates ) {
                //setting rates and base values
                  fx.rates = data.rates;
                  fx.base = data.base;
                  this.setState({rtname: type});
              } else {
                  // If not, apply to fxSetup global:
                  fxSetup = {
                      rates : data.rates,
                      base : data.base
                  }
                  this.setState({rtname: fx.rates});
              }
              var currency = fx.convert(this.state.USDvalue, {to: this.state.rtname});
              //the converted currency to be  displayed to the user
              this.setState({convertedCurrency: currency});
          }.bind(this)
      );


},
// Check if amount has been inputted by user, and get the converted currency. Otherwise, show error.
calculateRates: function (e){

if(this.state.USDvalue){
//retrieve the rates from api
   this.handleRequest(e.target.value);

}else{
  alert("Please enter a value!");
}
},

render: function(){

var description = "Below is an example of a currency converter which converts US dollars into a foreign currency.";



return (
  <div>
<NavigationBar/>
<div><br/></div>
<div>
  <h3 style = {styles.title}>Currency Exchange</h3>

    <p style = {styles.descript}> {description}</p>
</div>
<div style = {styles.outerBox}>
  <div  style = {styles.exchangeBox}>
  <form>
    <fieldset>
      <label > Enter US Price Here</label><br></br>
    <input  type = "text" id = "money"
      defaultValue = {this.state.USDvalue} onChange = {this.setAmount}>
    </input>
    <div><br/></div>
      <select id ="selection" style = {styles.dropMenu} defaultValue ={this.state.rtname}
         onChange={this.calculateRates}>
          <option value = "">select currency</option>
      <option value = "EUR">US-Euro</option>
          <option value = "GBP">US-Pound</option>
              <option value = "JPY">US-Yuan</option>
                  </select>
                <div><br/></div>
<input type ="text" id = "foreign"
  value = {this.state.convertedCurrency}
  readOnly = {true}>
</input>
    </fieldset>
  </form>
  </div>
  </div>
</div>
);


}

});



export default ExchangeRates
