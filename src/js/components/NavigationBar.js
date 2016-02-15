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

  render() {
    const { user } = this.props;
    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>Home</Link>{' '}
            <Link to="/stocks" style={styles.link} activeStyle={styles.activeLink}>Stocks</Link>{' '}
              <Link to="/study" style={styles.link} activeStyle={styles.activeLink}>Study</Link>{' '}
                <Link to="/ExRates" style={styles.link} activeStyle={styles.activeLink}>Exchange Rates</Link>{' '}
                </div>
                <div style={{ float: 'right' }}>
                  <Link style={styles.link} to="/profile">{user.name}</Link>
                    <button  id="login"
                      onClick = {this.props.onLogin}>log in</button>

                    <button id ="register"
                      onClick = {this.props.onRegister} >register</button>
                </div>
              </div>
            )
          }
        })


        export default NavigationBar
