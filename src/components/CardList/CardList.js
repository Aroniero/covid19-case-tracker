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
  casesType,
}) => {
  return (
    <CardListContainer>
      <Card
        onClick={(e) => {
          setCasesType('cases');
        }}
        title='cases'
        totalCases={cases}
        todayCases={todayCases}
        casesType={casesType}
      />
      <Card
        onClick={(e) => {
          setCasesType('deaths');
        }}
        title='deaths'
        totalCases={deaths}
        todayCases={todayDeaths}
        casesType={casesType}
      />
      <Card
        onClick={(e) => {
          setCasesType('recovered');
        }}
        title='recovered'
        totalCases={recovered}
        todayCases={todayRecovered}
        casesType={casesType}
      />
    </CardListContainer>
  );
};

export default CardList;
