import covidRoutes from './covidRoutes';

const fetchCountriesData = async () => {
  const countryURL = covidRoutes.countries;

  return fetch(countryURL)
    .then((response) => response.json())
    .then((data) => data);
};

export default fetchCountriesData;
