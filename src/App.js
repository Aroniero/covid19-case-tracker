import React, { useState } from 'react';
import { useCountryInfo, useCountryData } from './App.hook';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { Container, LeftSection, RightSection } from './App.style';

import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Map from './components/Map/Map';
import Table from './components/Table/Table';
import Chart from './components/Chart/Chart';

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
          <Header
            casesType={casesType}
            countryNames={countryNames}
            handleCountryChange={handleCountryChange}
          />
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
