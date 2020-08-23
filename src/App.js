import React, { useState } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import {
  Container,
  Header,
  Heading,
  LeftSection,
  RightSection,
} from './App.style';

import CountryDropdown from './components/CountryDropdown/CountryDropdown';
import CardList from './components/CardList/CardList';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import Chart from './components/Chart/Chart';
import { useCountryInfo, useCountryData } from './App.hook';

function App() {
  const [countryNames, tableData, mapCountries] = useCountryInfo();
  const [
    countryData,
    mapPosition,
    mapZoom,
    handleCountryChange,
  ] = useCountryData();
  const [casesType, setCasesType] = useState('cases');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <LeftSection>
          <Header>
            <Heading> Covid-19 - Case - Tracker </Heading>
            <CountryDropdown
              countries={countryNames}
              handleCountryChange={handleCountryChange}
            />
          </Header>
          <CardList
            casesType={casesType}
            setCasesType={setCasesType}
            countryData={countryData}
          />
          <Map
            mapCountries={mapCountries}
            mapPosition={mapPosition}
            mapZoom={mapZoom}
            casesType={casesType}
          />
        </LeftSection>
        <RightSection>
          <Chart casesType={casesType} />
          <Table tableData={tableData} />
        </RightSection>
      </Container>
    </ThemeProvider>
  );
}

export default App;
