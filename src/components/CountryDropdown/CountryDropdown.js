import React from 'react';
import { Select } from './CountryDropdown.style';

const CountryDropdown = ({ countries, handleCountryChange }) => {
  return (
    <Select name='countries' onChange={handleCountryChange}>
      <option value='global'>Global</option>
      {countries.map((country, i) => (
        <option key={i} value={country.value}>
          {country.name}
        </option>
      ))}
    </Select>
  );
};

export default CountryDropdown;
