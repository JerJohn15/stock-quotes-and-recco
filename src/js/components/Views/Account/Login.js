/**
@author- JerJohn15
This class displays a modal and the Login page when clicked in the Navigation Bar
*
*/

import React from 'react';
import {Modal} from 'react-bootstrap';

var Login = React.createClass({

  render: function(){

    return(
      <div>
        <Modal dialogClassName = "loginModal" show= {this.props.openModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="username">Username
             <input type = "text" id= "username" ></input>
            </label>
            <div>
              <br/>
            </div>
            <label htmlFor="password">Password
             <input type = "text" id= "password"></input>
            </label>
          <div>
              <br/>
            </div>
            <button id= "login"> Login  </button>
          </Modal.Body>
        </Modal>
      </div>
    );


  }

});

export default Login
