import React, { useState, useEffect } from 'react';

export const useCountryInfo = () => {
  const [countryNames, setCountryNames] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    const countryURL = 'https://disease.sh/v3/covid-19/countries';
    const fetchCountries = () => {
      fetch(countryURL)
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((item) => {
            return { name: item.country, value: item.countryInfo.iso2 };
          });
          setCountryNames(countries);
          setTableData(data);
          setMapCountries(data);
        });
    };
    fetchCountries();
  }, []);

  return [countryNames, tableData, mapCountries];
};

export const useCountryData = () => {
  const [currentCountry, setCurrentCountry] = useState('global');
  const [countryData, setCountryData] = useState({});
  const [mapPosition, setMapPosition] = useState({
    lat: 51.505,
    lng: -0.09,
  });
  const [mapZoom, setMapZoom] = useState(2);

  useEffect(() => {
    const fetchGlobalData = () => {
      fetch('https://disease.sh/v3/covid-19/all')
        .then((response) => response.json())
        .then((data) => setCountryData(data));
    };
    fetchGlobalData();
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
          countryCode === 'global'
            ? setMapPosition([51.505, -0.09])
            : setMapPosition([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
        });
    };
    fetchCountriesData();
  };

  return [countryData, mapPosition, mapZoom, handleCountryChange];
};
