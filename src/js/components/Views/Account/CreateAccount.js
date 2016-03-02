/**
@author - JerJohn15
This class displays the registration page when the user clicks the Register button.
*/

import React from 'react';
import {Modal} from 'react-bootstrap';

var CreateAccount = React.createClass ({
//ignore this for now
//  getInitialState: function(){
  //  return {textIsClear: false}
//  },


  render: function(){

    return(
      <div>

        <Modal dialogClassName = "registerModal" show= {this.props.openModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Registration </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id ="register">
                <label htmlFor="username">Username:
                 <input type = "text" id= "username" ></input>
                </label>
                <div>  <br/>  </div>
                <label htmlFor="password">Password:
                  <input type = "text" id= "password"></input>
                  </label>
                  <div>  <br/></div>
                    <label htmlFor="password">Re-enter
                      Password:
                     <input type = "text" id= "password"></input>
                    </label>
                    <div>   <br/>  </div>
                    <button id= "submit"> Submit  </button>
                    <button id= "clear" > Clear </button>

            </form>
          </Modal.Body>
        </Modal>
      </div>



    );
  }//,This will reset all fields
//  clearFields: function(){
//    document.getElementById('register').reset();
//  }



});

export default CreateAccount
