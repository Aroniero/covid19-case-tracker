import React from 'react';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { MapContainer, StyledLeafletMap } from './Map.style';

import MapCircles from '../MapCircles/MapCircles';

const Map = ({ mapCountries, mapPosition, mapZoom, casesType }) => {
  return (
    <MapContainer>
      <StyledLeafletMap center={mapPosition} zoom={mapZoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapCircles data={mapCountries} casesType={casesType} />
      </StyledLeafletMap>
    </MapContainer>
  );
};

export default Map;
