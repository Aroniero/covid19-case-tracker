import React from 'react';
import {
  TableHeading,
  TableContainer,
  TableBody,
  TableRow,
  TableData,
} from './Table.style';

const Table = ({ tableData }) => {
  return (
    <>
      <TableHeading>Number of Cases in different Countries</TableHeading>
      <TableContainer>
        <TableBody>
          {tableData
            .sort((a, b) => {
              if (a.cases > b.cases) {
                return -1;
              } else {
                return 1;
              }
            })
            .map(({ country, cases }) => (
              <TableRow key={country}>
                <TableData>{country}</TableData>
                <TableData>{cases}</TableData>
              </TableRow>
            ))}
        </TableBody>
      </TableContainer>
    </>
  );
};

export default Table;
