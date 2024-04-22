import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./pages";

function MapApp () {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />      
      </MapProvider>
    </PlacesProvider>
  )
}
export default MapApp;
export { MapApp };