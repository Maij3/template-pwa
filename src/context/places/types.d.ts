export type PlacesState = {
  isLoading: boolean;
  userLocation?: [number, number];
}

export type PlacesContextProps = {
  isLoading: boolean;
  userLocation?: [number, number];
};

export type PlacesProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export type PlacesAction = {
  type: 'setUserLocation';
  payload: [number, number];
}
