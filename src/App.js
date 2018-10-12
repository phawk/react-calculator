import React, { Component } from 'react';
import CalculatorFrame from './components/CalculatorFrame';
import Display from './components/Display';
import Buttons from './components/Buttons';
import calculator from './utils/calculator';

class App extends Component {
  state = {
    left: "0",
    right: "",
    operation: null
  }

  render() {
    return (
      <CalculatorFrame>
        <Display {...this.state} />
        <Buttons onPress={this.onPress} operation={this.state.operation} />
      </CalculatorFrame>
    );
  }

  onPress = (button) => {
    console.log("button", button);
    this.setState(calculator(this.state, button));
  }
}

export default App;
