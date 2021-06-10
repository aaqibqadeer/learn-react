import React from "react";

class LifecycleMethod extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor called")
    this.state = {a:1};
    this.add = this.add.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount calleddd")
  }

  add() {
    console.log("addd called")
    this.setState({a: this.state.a+1})
  }

  render() {
    return (
      <div>
        <p> {this.state.a} </p>
        <button type="button" onClick={this.add}>Add</button>
        {console.log("render called")}
      </div>
    )
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate called")
  }
  
  componentWillUnmount() {
    console.log("componentWillUnmount called")
  }
  

}


export default LifecycleMethod