import { Map } from 'mapbox-gl';

export type MapContextProps = {
  isMapReady: boolean;
  map?: Map;
  setMap: (map: Map) => void;
};

export type MapState = {
  isMapReady: boolean;
  map?: Map;
};  