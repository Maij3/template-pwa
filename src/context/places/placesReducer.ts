import { PlacesState, PlacesAction } from "./types";

export const placesReducer = (state: PlacesState , action:PlacesAction):PlacesState => {
      switch (action.type) {
        case "setUserLocation":
          return {
            ...state,
            isLoading: false,
            userLocation: action.payload
          }
        default:
          return state;
      }
};