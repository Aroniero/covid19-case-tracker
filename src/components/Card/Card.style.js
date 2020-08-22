import styled from 'styled-components';

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
`;

export const CardHeader = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

export const CardBody = styled.div``;

export const CardTitle = styled.h2``;

export const CardValue = styled.div`
  padding: 2px 0;
`;

export const CardDate = styled.p`
  margin-top: 10px;
`;
