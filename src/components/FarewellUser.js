import React from 'react'

class FarewellUser extends React.Component {
  render() {
    return <h1> Goodbye Mr. {this.props.name} </h1>
  }
}

export default FarewellUser