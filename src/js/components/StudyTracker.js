import React from "react";
import request from "superagent";
import NavigationBar from './NavigationBar';

var StudyTracker = React.createClass({

  getInitialState: function(){
    return {
      hoursStudying:1
    }
  },

  render(){
    var date =new Date()

    return (
      <div>
      <NavigationBar/>
      <div style={{margin:10}}>
       <h1>Hours spent studying:</h1>
       <h2> {this.state.hoursStudying} </h2>
       <h3>{date.toISOString().slice(0,10)}</h3>
      </div>
    </div>
  )
  }

});

export default StudyTracker
