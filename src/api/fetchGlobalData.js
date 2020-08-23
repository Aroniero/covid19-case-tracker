import covidRoutes from './covidRoutes';

const fetchGlobalData = async () => {
  const countryURL = covidRoutes.global;

  return fetch(countryURL)
    .then((response) => response.json())
    .then((data) => data);
};

export default fetchGlobalData;
