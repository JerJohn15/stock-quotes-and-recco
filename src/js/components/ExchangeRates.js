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
//Not using yet - var accounting = require("accounting");
// CSS for Exchange Rates page
const styles = {}

//var url = 'https://openexchangerates.org/api/latest.json?app_id=f7beb6b41bde4fabaa01f5bd5e459d8c';

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

"EUR" :  0.916333,//0.9202,
"GBP" :  0.670885,  //0.6715,
"JPY" : 121.164,//121.1400,
"USD" : 1

};
// NOT YET IMPLEMENTING - currency account settings
/**

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

*/


var ratesAPI = React.createClass({

getInitialState: function(){
  return {rt: ' '
      };
},
getRtState: function(){
  return this.state.rt;
},


//sends out the request from the API and retrieves its data
handleRequest: function(type){


  $.getJSON(
        //  using yahoo finance api
         'https://openexchangerates.org/api/latest.json?app_id=f7beb6b41bde4fabaa01f5bd5e459d8c',
        function(data) {
              // Check money.js has finished loading:
              if ( typeof fx !== "undefined" && fx.rates ) {

                //the base and the rates here
                  fx.rates = data.rates.type;
                  this.state.setState({rt: fx.rates});
                //  fx.base = data.base;
              } else {
                  // If not, apply to fxSetup global:
                  var fxSetup = {
                      rates : data.rates.type,
                      base : data.base
                  }
                  this.state.setState({rt: fx.rates});
              }

          }.bind(this)
      );


},
//passes the parent function, to be used as the callback, and the rate to child component
render: function(){
  return (


 <ExchangeRates sendRequest = {this.handleRequest} rate = {this.state.rt}/>

  );
}


});

/**
This component handles the data used to convert the currency from
US to foriegn
*/

var ExchangeRates = React.createClass({
  getInitialState: function(){
    return {USDvalue: ' ',
          convertedCurrency: ' ',
          rtname: ' '
        };
  },
  getUSDState: function(){
    return this.state.USDvalue;
  },

//sets the amount - USD
setAmount: function(event){
   this.setState({USDvalue: event.target.value});
},
// Check if amount has been inputted by user, and get the converted currency. Otherwise, show error.
calculateRates: function (e){
//set rate of rt equal to whatever the rateType is selected from the user
if(this.getUSDState){
//selected currency "EUR, GBP, JPY"

   //callback function that retrieves data from API
   this.props.sendRequest({rtname: e.target.value});
   var currency = fx.convert(this.getUSDState, {to: this.props.rate});
   //the state to be displayed when rendered
   this.setState({convertedCurrency: currency});

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
      defaultValue = {this.state.USDvalue} onChange = {this.setAmount}>
    </input>
    <br>
    </br>
      <select id ="selection" defaultValue =
        {this.props.rate} onChange={this.calculateRates}>
          <option value = "">select currency</option>
      <option value = "EUR">US-Euro</option>
          <option value = "GBP">US-Pound</option>
              <option value = "JPY">US-Yuan</option>
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
