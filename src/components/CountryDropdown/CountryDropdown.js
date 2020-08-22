import React from 'react';
import { Select } from './CountryDropdown.style';

const CountryDropdown = ({ countries, handleCountryChange }) => {
  return (
    <div>
      <label htmlFor='countries'>Choose a country:</label>
      <Select id='countries' name='countries' onChange={handleCountryChange}>
        <option value='global'>Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country.value}>
            {country.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default CountryDropdown;
