import React, { useState } from 'react';
import { Map as LeafletMap, TileLayer, Popup, Circle } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import MapCircles from '../MapCircles/MapCircles';

const MapContainer = styled.div`
  height: 500px;
  margin: 0 20px;
`;

const StyledLeafletMap = styled(LeafletMap)`
  /* Must have for Map !!!! */
  height: 100%;
`;

// const createCircleOnMap = (data, casesType = 'deaths') => {};

const Map = ({ mapCountries, mapPosition, mapZoom, casesType }) => {
  return (
    <MapContainer>
      <StyledLeafletMap center={mapPosition} zoom={mapZoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapCircles data={mapCountries} casesType={casesType} />
        {/* {createCircleOnMap(mapCountries)} */}
        {/* <Circle center={[51.51, -0.06]} radius={200} /> */}
      </StyledLeafletMap>
    </MapContainer>
  );
};

export default Map;
