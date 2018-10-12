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
        <Buttons onPress={this.handleButtonPress} operation={this.state.operation} />
      </CalculatorFrame>
    );
  }

  handleButtonPress = (button) => {
    this.setState(calculator(this.state, button));
  }
}

export default App;
