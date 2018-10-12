import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px;
`;

const Button = styled.div`
  background: #606060;
  color: #fff;
  padding: 10px;
  font-weight: 300;
  text-align: center;
  font-size: 38px;
  margin: 0 1px;
  flex-basis: 100%;
  outline: ${props => props.active ? "solid 2px rgba(255,255,255,0.3)" : "none"};
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
    const { operation } = this.props;

    return (
      <React.Fragment>
        <Row>
          <DarkButton onClick={() => this.props.onPress("clear")}>C</DarkButton>
          <DarkButton onClick={() => this.props.onPress("togglePositive")}>+/-</DarkButton>
          <DarkButton onClick={() => this.props.onPress("percent")}>%</DarkButton>
          <Operation active={operation === "divide"} onClick={() => this.props.onPress("divide")}>/</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(7)}>7</Button>
          <Button onClick={() => this.props.onPress(8)}>8</Button>
          <Button onClick={() => this.props.onPress(9)}>9</Button>
          <Operation active={operation === "multiply"} onClick={() => this.props.onPress("multiply")}>&times;</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(4)}>4</Button>
          <Button onClick={() => this.props.onPress(5)}>5</Button>
          <Button onClick={() => this.props.onPress(6)}>6</Button>
          <Operation active={operation === "subtract"} onClick={() => this.props.onPress("subtract")}>&ndash;</Operation>
        </Row>
        <Row>
          <Button onClick={() => this.props.onPress(1)}>1</Button>
          <Button onClick={() => this.props.onPress(2)}>2</Button>
          <Button onClick={() => this.props.onPress(3)}>3</Button>
          <Operation active={operation === "add"} onClick={() => this.props.onPress("add")}>+</Operation>
        </Row>
        <Row style={{ paddingBottom: "2px" }}>
          <Button onClick={() => this.props.onPress(0)} style={{ flexBasis: "230%" }}>0</Button>
          <Button onClick={() => this.props.onPress(".")}>.</Button>
          <Operation onClick={() => this.props.onPress("equals")}>=</Operation>
        </Row>
      </React.Fragment>
    );
  }
}
