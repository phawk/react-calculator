import React, { Component } from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  background: #000;
  color: #fff;
  padding: 10px 24px;
  font-size: 44px;
  font-weight: 300;
  text-align: right;
`;

export default class Display extends Component {
  render() {
    return (
      <Screen>
        0
      </Screen>
    );
  }
}
