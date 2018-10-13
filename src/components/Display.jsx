import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  padding: 10px 24px;
  color: #fff;
  font-weight: 300;
  text-align: right;
  font-size: ${props => props.fontSize}px;
  line-height: 48px;
`;

export default (props) => {
  const text = props.right ? props.right : props.left;
  let fontSize = 44;
  if (text.length > 10) {
    fontSize = 44 - ((text.length - 10) * 2);
  }
  if (fontSize < 14) {
    fontSize = 14;
  }
  return (
    <Screen fontSize={fontSize}>
      { text }
    </Screen>
  );
}
