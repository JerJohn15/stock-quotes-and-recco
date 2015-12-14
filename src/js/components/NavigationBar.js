import React from 'react'
import { Link } from 'react-router'

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

class NavigationBar extends React.Component {

  static defaultProps = {
    user: {
      id: 1,
      name: 'A User'
    }
  }

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>Home</Link>{' '}
          <Link to="/stocks" style={styles.link} activeStyle={styles.activeLink}>Stocks</Link>{' '}
          <Link to="/study" style={styles.link} activeStyle={styles.activeLink}>Study</Link>{' '}
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">{user.name}</Link> <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    )
  }
}

export default NavigationBar
