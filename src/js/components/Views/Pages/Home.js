import React from 'react'
import styles from '../../../../css/main.css';
/**
*
This class renders the content for the home page
@author - Matt R,  JerJohn15
*/


var bodyText = "This is a toy application showcasing examples that utilize the React JS, and Node JS frameworks. Please click one of the links above to see an example";

var Home = React.createClass ({

render(){


  return(
    <div>
       <div id = "Home" className={styles.titleBox}>
         <div>
           <h3 className={styles.title}> Stock Quotes and Recco Toy App</h3>
           <h5 className = {styles.title}>Contributors: Matt Rkiouak && Jeremiah Johnson</h5>
         </div>
         <div>
           <br/>
         </div>
         <div className = {styles.body}>
           {bodyText}
         </div>
       </div>
     </div>
  );
}




})


export default Home
