import styled from 'styled-components';

const CalculatorFrame = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #2D2D2D;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  @media screen and (min-width: 480px) {
    max-width: 375px;
  }
`;

export default CalculatorFrame;
