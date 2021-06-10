import React from 'react';

class CustomEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn:false}
    // this.updateState = this.updateState.bind(this);
  }


  updateState = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.updateState}> {this.state.isToggleOn? 'On': 'Off'} </button>
      </div>
    )
  }
}

export default CustomEvent