import React from "react";
import request from "superagent";
import NavigationBar from './NavigationBar';
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
      <div>
      <NavigationBar/>
      <div style={{margin:10}}>
       <h1>Hours spent studying:</h1>
       <h2> {this.state.hoursStudying} </h2>
       <h3>{date.toISOString().slice(0,10)}</h3>
       <Button bsSize="medium"
       onClick={()=>{this.setState({hoursStudying:(this.state.hoursStudying+1)})}}
       style={{marginBottom:'4px'}}>Log Hour</Button>
      </div>
    </div>
  )
  }

});

export default StudyTracker
