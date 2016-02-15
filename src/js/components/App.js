import React from 'react'
import NavigationBar from './NavigationBar'
import Login from './Views/Account/Login';
import CreateAccount from './Views/Account/CreateAccount';
/**
@Details - Displays the views for each component.
The navigation bar and  home page is rendered by default(see Home.js).
If user clicks a link from the navigation bar, that component is displayed
here (the "contentView" variable stores the props from the children that is set by the
IndexRouting technique in React-Router - (see app.js file)).

**/

var App =  React.createClass ({


  getInitialState: function(){
    return { showLogin: false, showRegister: false};
  },

  render() {
    //props.children extracts all of the child components of App depending on what
    //the user clicks in the navigation bar
    var contentView = this.props.children;

    return (
      <div>
        <div className ="NavBar">
          <NavigationBar onLogin = {this.openLogin}
            onRegister = {this.openRegister}/>
        </div>
        <div className = "Modals">
          {this.state.showLogin ?
            <Login openModal = {this.state.showLogin}
              closeModal = {this.closeLogin}/>   : null}

              {this.state.showRegister ?
                <CreateAccount openModal = {this.state.showRegister}
                  closeModal = {this.closeRegister} />  : null}
                </div>
                <div className = "Content">
                  {contentView}
                </div>
              </div>

            )
          },//The setters which monitor whether or not the modal is active
          openLogin: function(){
            this.setState(
              {  showLogin: true  }
            );

          },

          openRegister: function(){
            this.setState(
              {  showRegister: true  }
            );

          },

          closeLogin: function(){

            this.setState(
              {  showLogin: false  }
            );

          },
          closeRegister: function(){

            this.setState(
              {  showRegister: false  }
            );

          }


        })
        export default App
