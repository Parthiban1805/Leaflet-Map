// src/App.js or src/App.jsx
import React from 'react';
import MapComponent from './components/MapComponent';
import './fix-leaflet-icon'; 
import 'leaflet/dist/leaflet.css'; 

function App() {
  return (
    <div className="App">
      <h1>React Leaflet Map with Markers</h1>
      <MapComponent />
    </div>
  );
}

export default App;
