/**
*
This class handles the implementation of converting
US currency to foreign currency (vice-versa).

@author - JerJohn15
*
*/

import React from 'react';
import NavigationBar from './NavigationBar';

var body = "Below is a currency converter, converting foreign currency to US dollars. (vice-versa)";

var ExchangeRates = React.createClass({

render: function(){

return (

  <div>
<NavigationBar/>

<p> You've made it to the exchange rates page </p>

  </div>
);


}



});

export default ExchangeRates
