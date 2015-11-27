import React from 'react'
import NavigationBar from './NavigationBar'

/**
*
Placed CSS elements in classes.
Added in a body text.
@author - JerJohn15
*/

var bodyText = "Welcome! Please Login or create an account here.";

const styles = {}

styles.titleBox = {
  padding: '20px',
  paddingTop:'10px'
}

styles.title = {
fontFamily:'Abril Fatface'
}

styles.body =
{
  marginLeft: '80px'
}

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div style={styles.titleBox}>
          {this.props.children}
          <h3 style={styles.title}> Jeremiahs Version</h3>
        </div>,
        <div style = {styles.body}>{bodyText}</div>

      </div>

    )
  }
}

export default App
