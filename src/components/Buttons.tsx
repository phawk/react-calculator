import React from 'react';
import styled from 'styled-components';

interface ButtonsProps {
  operation: string | null | undefined;
  onPress(button: string): void;
}

interface OperationButtonProps {
  active?: boolean
}

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
  box-shadow: ${(props: OperationButtonProps) => props.active ? "inset 0px 0px 0px 4px rgba(0,0,0,0.15)" : "none"};
`;

const Operation = styled(Button)`
  background: #FF9F06;
  color: #fff;
`;

const DarkButton = styled(Button)`
  background: #414141;
  color: #fff;
`;

export default ({ operation, onPress }: ButtonsProps) => (
  <React.Fragment>
    <Row>
      <DarkButton onClick={() => onPress("clear")}>C</DarkButton>
      <DarkButton onClick={() => onPress("togglePositive")}>+/-</DarkButton>
      <DarkButton onClick={() => onPress("percent")}>%</DarkButton>
      <Operation
        active={operation === "divide"}
        onClick={() => onPress("divide")}
      >/</Operation>
    </Row>
    <Row>
      <Button onClick={() => onPress("7")}>7</Button>
      <Button onClick={() => onPress("8")}>8</Button>
      <Button onClick={() => onPress("9")}>9</Button>
      <Operation
        active={operation === "multiply"}
        onClick={() => onPress("multiply")}
      >&times;</Operation>
    </Row>
    <Row>
      <Button onClick={() => onPress("4")}>4</Button>
      <Button onClick={() => onPress("5")}>5</Button>
      <Button onClick={() => onPress("6")}>6</Button>
      <Operation
        active={operation === "subtract"}
        onClick={() => onPress("subtract")}
      >&ndash;</Operation>
    </Row>
    <Row>
      <Button onClick={() => onPress("1")}>1</Button>
      <Button onClick={() => onPress("2")}>2</Button>
      <Button onClick={() => onPress("3")}>3</Button>
      <Operation
        active={operation === "add"}
        onClick={() => onPress("add")}
      >+</Operation>
    </Row>
    <Row style={{ paddingBottom: "2px" }}>
      <Button onClick={() => onPress("0")} style={{ flexBasis: "230%" }}>0</Button>
      <Button onClick={() => onPress(".")}>.</Button>
      <Operation onClick={() => onPress("equals")}>=</Operation>
    </Row>
  </React.Fragment>
);
