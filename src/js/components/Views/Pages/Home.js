import React from 'react'

/**
*
This class renders the content for the home page
@author - Matt R,  JerJohn15
*/


var bodyText = "This is a toy application showcasing examples that utilize the React JS, and Node JS frameworks. Please click one of the links above to see an example";

const styles = {}

styles.titleBox = {
  padding: '20px',
  paddingTop:'10px'
}

styles.title = {
  fontFamily:'Abril Fatface'
}

styles.body =
{
  marginLeft: '80px',
  fontFamily: 'cursive'
}

var Home = React.createClass ({

render(){


  return(
    <div>
       <div className = "Home" style={styles.titleBox}>
         <div>
           <h3 style={styles.title}> Stock Quotes and Recco Toy App</h3>
           <h5 style = {styles.title}>Contributors: Matt Rkiouak && Jeremiah Johnson</h5>
         </div>
         <div>
           <br/>
         </div>
         <div style = {styles.body}>
           {bodyText}
         </div>
       </div>
     </div>
  );
}




})


export default Home
