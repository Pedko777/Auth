import React, { Component } from 'react';

class CounterPage extends Component {
  state = {
    value: 0,
    step: 1,
  };

  componentDidMount () {
      console.log("componentDidMount")
  }
  componentDidUpdate () {
      console.log("componentDidUpdate")
  }

  increment = () => {
    this.setState(prevState => {
      return { value: prevState.value + this.state.step };
    });
  };

  decrement = () => {
    this.setState(prevState => {
        return { value: prevState.value - this.state.step };
      });
  };

  render() {
    console.log("Render CounterPage")
    return (
      <div>
        <h1>Counter</h1>
        <span>{this.state.value}</span>
        <br />
        <button type="button" onClick={this.decrement}>
          Decrement -
        </button>
        <button type="button" onClick={this.increment}>
          Incremet +
        </button>
      </div>
    );
  }
}
export default CounterPage;
