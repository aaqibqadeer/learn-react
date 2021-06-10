import React from 'react';
class DateTime extends React.Component {

  constructor(props) {
    super(props)
    this.state = {date:new Date()}
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date:new Date()
    })
    // this.state.date = new Date()
    // this.setState((prevState, props) => {
    // })
  }

  render() {
    return (
      <div>
        <p> Current Time is: </p>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }

}

export default DateTime