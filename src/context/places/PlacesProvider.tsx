import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { PlacesState, PlacesProviderProps } from './types';
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined
};

 export const PlacesProvider = ({children}:PlacesProviderProps) => {
  const [state , dispatch ] = useReducer(placesReducer, INITIAL_STATE);


  useEffect(() => {
    getUserLocation().then((location) => {
      dispatch({type: 'setUserLocation', payload: location});
    } ).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <PlacesContext.Provider value={{
      ...state
    }}>
      {children} 
    </PlacesContext.Provider>
  )
}  