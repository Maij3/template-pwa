import { MapState } from "./types";
import { Map } from 'mapbox-gl';

type MapAction = { type: 'setMap'; payload: Map }

export const mapReducer = (state:MapState , action: MapAction):MapState => {
  switch (action.type) {
    case 'setMap':
      return {
        ...state,
        map: action.payload,
        isMapReady: true
      };
    default:
      return state;
  } 
};