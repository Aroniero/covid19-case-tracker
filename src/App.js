import React, { useState, useEffect } from 'react';

import GlobalStyle from './styles/GlobalStyle';

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

function App() {
  const [countryNames, setCountryNames] = useState([]);
  const [currentCountry, setCurrentCountry] = useState('global');
  const [countryData, setCountryData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState('cases');

  useEffect(() => {
    const fetchGlobalData = () => {
      fetch('https://disease.sh/v3/covid-19/all')
        .then((response) => response.json())
        .then((data) => setCountryData(data));
    };
    fetchGlobalData();
  }, []);

  useEffect(() => {
    const countryURL = 'https://disease.sh/v3/covid-19/countries';
    const fetchCountriesNames = () => {
      fetch(countryURL)
        .then((response) => response.json())
        .then((data) => {
          setTableData(data);

          const countries = data.map((item) => {
            return { name: item.country, value: item.countryInfo.iso2 };
          });
          setCountryNames(countries);
        });
    };
    fetchCountriesNames();
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;

    let url =
      countryCode === 'global'
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const fetchCountriesData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCurrentCountry(countryCode);
          setCountryData(data);
        });
    };
    fetchCountriesData();
  };

  return (
    <Container>
      <GlobalStyle />
      <LeftSection>
        <Header>
          <Heading> Covid-19 - Tracker </Heading>
          <CountryDropdown
            countries={countryNames}
            handleCountryChange={handleCountryChange}
          />
        </Header>
        <CardList setCasesType={setCasesType} countryData={countryData} />
        <Map />
      </LeftSection>
      <RightSection>
        <Table tableData={tableData} />
        <Chart casesType={casesType} />
      </RightSection>
    </Container>
  );
}

export default App;
