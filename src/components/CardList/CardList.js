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
}) => {
  console.log(cases);
  return (
    <CardListContainer>
      <Card title='Cases' totalCases={cases} todayCases={todayCases} />
      <Card title='Deaths' totalCases={deaths} todayCases={todayDeaths} />
      <Card
        title='Recovered'
        totalCases={recovered}
        todayCases={todayRecovered}
      />
    </CardListContainer>
  );
};

export default CardList;
