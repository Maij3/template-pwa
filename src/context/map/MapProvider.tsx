import { useReducer } from "react";
import { mapReducer } from "./mapReducer";
import { MapContext } from "./MapContext";
import { Map, Marker, Popup } from 'mapbox-gl';

const INITIAL_STATE = {
  isMapReady: false,
  map: undefined,
};

type MapProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const MapProvider = ({children}:MapProviderProps) => {

  const [state , dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const setMap = (map: Map) => { 
    const myLocation = new Popup({ offset: 25 }).setHTML(`<h6>My Location</h6>`);

    new Marker({
      color: '#000000',
    }).setLngLat( map.getCenter() )
      .setPopup( myLocation )
      .addTo( map );
    
    dispatch({ type: 'setMap', payload: map });
  } 

  return (
    <MapContext.Provider value={{
      ...state,

      //Methods
      setMap
    }}>
      {children}
    </MapContext.Provider>
  )
}