import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const MarkerComponent = ({ position, label, onClick }) => {
  return (
    <Marker position={position} eventHandlers={{ click: onClick }}>
      <Popup>{label}</Popup>
    </Marker>
  );
};

export default MarkerComponent;
