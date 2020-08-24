import styled from 'styled-components';
import { Map as LeafletMap } from 'react-leaflet';

export const MapContainer = styled.div`
  height: 500px;
  margin: 0 20px;
`;

export const StyledLeafletMap = styled(LeafletMap)`
  height: 100%;
`;
