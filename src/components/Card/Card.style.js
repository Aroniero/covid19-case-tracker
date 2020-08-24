import styled from 'styled-components';
import CountUp from 'react-countup';

export const CardWrapper = styled.div`
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0px 0px 10px -6px #000000;
  cursor: pointer;
  border-bottom: 10px solid
    ${({ theme, color }) => (color ? theme.colors[color] : 'white')};
  min-width: 31%;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardHeader = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardValue = styled(CountUp)`
  padding: 2px 0;
`;
