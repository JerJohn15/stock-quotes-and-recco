import React from "react";
import request from "superagent";
import {Button} from 'react-bootstrap';

var StudyTracker = React.createClass({

  getInitialState: function(){
    return {
      hoursStudying:1
    }
  },

  overRideSetState: function(param){
    this.setState({hoursStudying:(param+1)});
  },

  render(){
    var date = new Date()

    return (
      <div className = "StudyTracker">
      <div style={{margin:10}}>
        <h1 style = {{fontFamily:'Abril Fatface'}}>Study Tracker</h1>
       <h3>Hours spent studying:</h3>
       <h2> {this.state.hoursStudying} </h2>
       <h3>{date.toISOString().slice(0,10)}</h3>
       <Button id="trackerButton" bsSize="medium"
       onClick={()=>{this.setState({hoursStudying:(this.state.hoursStudying+1)})}}
       style={{marginBottom:'4px'}}>Log Hour</Button>
      </div>
    </div>
  )
  }

});

export default StudyTracker
