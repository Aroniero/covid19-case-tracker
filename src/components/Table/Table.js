import React from 'react';
import {
  TableHeading,
  TableContainer,
  TableBody,
  TableRow,
  TableData,
} from './Table.style';
import CountUp from 'react-countup';

const Table = ({ tableData }) => {
  return (
    <>
      <TableHeading>Number of Cases in different Countries</TableHeading>
      <TableContainer>
        <TableBody>
          {tableData
            .sort((a, b) => (a.cases > b.cases ? -1 : 1))
            .map(({ country, cases }) => (
              <TableRow key={country}>
                <TableData>{country}</TableData>
                <TableData>
                  <CountUp start={0} end={cases} duration={1} separator=',' />
                </TableData>
              </TableRow>
            ))}
        </TableBody>
      </TableContainer>
    </>
  );
};

export default Table;
