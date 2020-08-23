const covidRoutes = {
  country: (countryCode) =>
    `https://disease.sh/v3/covid-19/countries/${countryCode}`,
  countries: 'https://disease.sh/v3/covid-19/countries/',
  global: 'https://disease.sh/v3/covid-19/all',
};

export default covidRoutes;
