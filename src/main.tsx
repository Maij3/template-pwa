import React from 'react'
import ReactDOM from 'react-dom/client'
import MapApp from './MapApp'
import mapboxgl from 'mapbox-gl';

if(!navigator.geolocation) {
  alert('Geolocation is not supported by your browser')
  throw new Error('Geolocation is not supported by your browser')
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWFpajMiLCJhIjoiY2x0NTI1dGg4MDlobzJrbWpmZnhvdWdlaiJ9.fezcut9G1vU21SA091FQVg';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapApp />
  </React.StrictMode>,
)