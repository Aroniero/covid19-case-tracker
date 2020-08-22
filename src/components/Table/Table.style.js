import styled from 'styled-components';

export const TableHeading = styled.h2`
  margin: 20px 0 10px;
  padding: 0 20px;
`;

export const TableContainer = styled.table`
  width: 100%;
  padding: 0 20px;
  display: block;
  overflow: auto;
  height: 200px;
  width: 100%;
  @media (${({ theme }) => theme.media.lg}) {
    height: 450px;
  }
`;

export const TableBody = styled.tbody`
  text-align: center;

  display: block;

  tr:nth-of-type(odd) {
    background-color: lightgray;
  }
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TableData = styled.td`
  padding: 5px 0;
`;
