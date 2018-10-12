import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  background: #606060;
  color: #fff;
  padding: 10px 24px;
  font-weight: 300;
  text-align: center;
  font-size: 38px;
  width: calc(25% - 2px);
`;

const Operation = styled(Button)`
  background: #FF9F06;
  color: #fff;
`;

const DarkButton = styled(Button)`
  background: #414141;
  color: #fff;
`;

export default class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <DarkButton onClick={() => this.props.onPress("clear")}>C</DarkButton>
          <DarkButton onClick={() => this.props.onPress("togglePositive")}>+/-</DarkButton>
          <DarkButton onClick={() => this.props.onPress("percent")}>%</DarkButton>
          <Operation onClick={() => this.props.onPress("divide")}>/</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(7)}>7</Button>
          <Button onClick={() => this.props.onPress(8)}>8</Button>
          <Button onClick={() => this.props.onPress(9)}>9</Button>
          <Operation onClick={() => this.props.onPress("multiply")}>&times;</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(4)}>4</Button>
          <Button onClick={() => this.props.onPress(5)}>5</Button>
          <Button onClick={() => this.props.onPress(6)}>6</Button>
          <Operation onClick={() => this.props.onPress("subtract")}>&ndash;</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(1)}>1</Button>
          <Button onClick={() => this.props.onPress(2)}>2</Button>
          <Button onClick={() => this.props.onPress(3)}>3</Button>
          <Operation onClick={() => this.props.onPress("add")}>+</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(0)} style={{ width: "50%" }}>0</Button>
          <Button onClick={() => this.props.onPress(".")}>.</Button>
          <Operation onClick={() => this.props.onPress("equals")}>=</Operation>
        </Row>
      </React.Fragment>
    );
  }
}
