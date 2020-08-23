import covidRoutes from './covidRoutes';

const fetchCountryData = async (countryCode) => {
  const countryURL = covidRoutes.country(countryCode);

  return fetch(countryURL)
    .then((response) => response.json())
    .then((data) => data);
};

export default fetchCountryData;
