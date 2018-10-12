import React, { Component } from 'react';
import CalculatorFrame from './components/CalculatorFrame';
import Display from './components/Display';
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <CalculatorFrame>
        <Display />
        <Buttons onPress={this.onPress} />
      </CalculatorFrame>
    );
  }

  onPress = (button) => {
    console.log("button", button);
  }
}

export default App;
