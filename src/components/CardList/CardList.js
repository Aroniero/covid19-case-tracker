import React from 'react';
import { CardListContainer } from './CardList.style';
import Card from '../Card/Card';

const CardList = ({
  countryData: {
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  },
  setCasesType,
}) => {
  return (
    <CardListContainer>
      <Card
        onClick={(e) => {
          setCasesType('cases');
        }}
        title='Cases'
        totalCases={cases}
        todayCases={todayCases}
      />
      <Card
        onClick={(e) => {
          setCasesType('deaths');
        }}
        title='Deaths'
        totalCases={deaths}
        todayCases={todayDeaths}
      />
      <Card
        onClick={(e) => {
          setCasesType('recovered');
        }}
        title='Recovered'
        totalCases={recovered}
        todayCases={todayRecovered}
      />
    </CardListContainer>
  );
};

export default CardList;
