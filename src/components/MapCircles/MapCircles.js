import React from 'react';
import { Popup, Circle } from 'react-leaflet';
import theme from '../../styles/theme';

import { PopupImage, PopupHeading, PopupDesc } from './MapCircles.style';

const MapCircles = ({ data, casesType = 'cases' }) => {
  return data.map((country, i) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={theme.colors[casesType]}
      fillColor={theme.colors[casesType]}
      fillOpacity={0.4}
      radius={Math.sqrt(country[casesType]) * theme.circleRadius[casesType]}
      key={i}
    >
      <Popup>
        <PopupImage src={country.countryInfo.flag} alt={country.country} />
        <PopupHeading>{country.country}</PopupHeading>
        <PopupDesc>
          {casesType}: {country[casesType]}
        </PopupDesc>
      </Popup>
    </Circle>
  ));
};

export default MapCircles;
