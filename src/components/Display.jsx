import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  color: #fff;
  padding: 10px 24px;
  font-size: 44px;
  font-weight: 300;
  text-align: right;
`;

export default (props) => (
  <Screen>
    { props.right ? props.right : props.left }
  </Screen>
);
