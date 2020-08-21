import React, { useState } from 'react';
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

import colors from '../../styles/colors';

const MapContainer = styled.div`
  height: 500px;
  margin: 0 20px;
`;

const StyledLeafletMap = styled(LeafletMap)`
  height: 100%;
`;

const createCircleOnMap = (data, casesType = 'deaths') => {
  return data.map((country, i) => {
    console.log(country[casesType]);
    return (
      <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        color={colors[casesType]}
        fillColor={colors[casesType]}
        fillOpacity={0.4}
        radius={Math.sqrt(country[casesType]) * 500}
        key={i}
      >
        <Popup>Im pop up</Popup>
      </Circle>
    );
  });
};

const Map = ({ mapCountries, mapPosition, mapZoom }) => {
  return (
    <MapContainer>
      <StyledLeafletMap center={mapPosition} zoom={mapZoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {createCircleOnMap(mapCountries)}
        {/* <Circle center={[51.51, -0.06]} radius={200} /> */}
      </StyledLeafletMap>
    </MapContainer>
  );
};

export default Map;
