import { useState, useEffect } from 'react';
import fetchGlobalData from './api/fetchGlobalData';
import fetchCountryData from './api/fetchCountryData';
import fetchCountriesData from './api/fetchCountriesData';

export const useCountryInfo = () => {
  const [countryNames, setCountryNames] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCountriesData();
      const countries = data.map((item) => {
        return { name: item.country, value: item.countryInfo.iso2 };
      });
      setCountryNames(countries);
      setTableData(data);
      setMapCountries(data);
    };
    getData();
  }, []);

  return [countryNames, tableData, mapCountries];
};

export const useCountryData = () => {
  // eslint-disable-next-line
  const [currentCountry, setCurrentCountry] = useState('global');
  const [countryData, setCountryData] = useState({});
  const [mapPosition, setMapPosition] = useState({
    lat: 51.505,
    lng: -0.09,
  });
  const [mapZoom, setMapZoom] = useState(2);

  useEffect(() => {
    const globalData = async () => {
      setCountryData(await fetchGlobalData());
    };
    globalData();
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;

    let data = {};
    const getData = async () => {
      if (countryCode === 'global') {
        data = await fetchGlobalData();
        setMapPosition([51.505, -0.09]);
      } else {
        data = await fetchCountryData(countryCode);
        setMapPosition([data.countryInfo.lat, data.countryInfo.long]);
      }
      setCurrentCountry(countryCode);
      setCountryData(data);
      setMapZoom(4);
    };
    getData();
  };

  return [countryData, mapPosition, mapZoom, handleCountryChange];
};
