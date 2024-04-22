import { BtnLocation } from "../components/btnLocation";
import { MapView } from "../components/mapView";

function HomeScreen() {
  return (
    <div>
      <MapView />
      <BtnLocation />
    </div>
  );
}
export default HomeScreen;
export { HomeScreen}