import React from 'react'
import NavigationBar from './NavigationBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div style={{ padding: 20, paddingTop:10 }}>
          {this.props.children}
          <h3 style={{fontFamily:'Abril Fatface'}}> Matt Rkiouak</h3>
        </div>
      </div>
    )
  }
}

export default App
