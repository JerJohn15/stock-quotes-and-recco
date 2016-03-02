import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const blue = '#337ab7'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: blue,
  color: light
}


styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  padding: 11,
  color: light,
  fontWeight: 200,
  background: light,
  color: blue
}

var NavigationBar = React.createClass ({

  getDefaultProps: function() {
    return {
      user: {
        id: 1,
        name: 'A User'
      }
    }
  },

  logOut: function () {
    alert('log out');
  },
  //this should be used in the 2nd button view
//                  <Link style={styles.link} to="/profile">{user.name}</Link>

  render() {
    const { user } = this.props;
    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link activeClassName = "HomePage" to="/" style={styles.link}>Home</Link>{' '}
            <Link activeClassName = "StocksPage" to="/stocks" style={styles.link} activeStyle={styles.activeLink}>Stocks</Link>{' '}
              <Link activeClassName = "StudyPage" to="/study" style={styles.link} activeStyle={styles.activeLink}>Study</Link>{' '}
                <Link activeClassName = "ExRatesPage" to="/ExRates" style={styles.link} activeStyle={styles.activeLink}>Currency Converter</Link>{' '}
                </div>
                <div style={{ float: 'right' }}>
                    <button  id="loginButton"
                      onClick = {this.props.onLogin}>log in</button>

                    <button id ="registerButton"
                      onClick = {this.props.onRegister} >register</button>
                </div>
              </div>
            )
          }
        })


        export default NavigationBar
