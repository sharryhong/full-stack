import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }))
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }))
  }

  render() {
    return (
      <div>
        <div>Number: {this.state.count}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default App;