import React from 'react';
import { Popup, Circle } from 'react-leaflet';
import theme from '../../styles/theme';
import styled from 'styled-components';

const PopupImage = styled.img`
  width: 100px;
  border: 1px solid black;
`;

const PopupHeading = styled.h2`
  margin-top: 5px;
  text-transform: uppercase;
`;
const PopupDesc = styled.p`
  margin: 10px 0;
  text-transform: capitalize;
`;

const MapCircles = ({ data, casesType = 'recovered' }) => {
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
