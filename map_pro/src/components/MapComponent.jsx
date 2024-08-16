import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import MarkerComponent from './MarkerComponent';

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi" },
  { position: [19.076, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
];

const CenterMap = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const MapComponent = () => {
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Initial center: India

  return (
    <MapContainer center={mapCenter} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CenterMap center={mapCenter} />
      {markers.map((marker, index) => (
        <MarkerComponent
          key={index}
          position={marker.position}
          label={marker.label}
          onClick={() => setMapCenter(marker.position)}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
