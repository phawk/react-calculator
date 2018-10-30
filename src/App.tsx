import React, { Component } from 'react';
import CalculatorFrame from './components/CalculatorFrame';
import Display from './components/Display';
import Buttons from './components/Buttons';
import calculator from './utils/calculator';
import CalculatorState from './utils/CalculatorState';

class App extends Component {
  state: CalculatorState = {
    left: "0",
    right: null,
    operation: null
  }

  render() {
    return (
      <CalculatorFrame>
        <Display {...this.state} />
        <Buttons
          onPress={this.handleButtonPress}
          operation={this.state.operation}
        />
      </CalculatorFrame>
    );
  }

  handleButtonPress = (button: string) => {
    this.setState(calculator(this.state, button));
  }
}

export default App;
