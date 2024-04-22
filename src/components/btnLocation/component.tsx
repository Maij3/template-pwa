import { useContext } from "react";
import { MapContext } from "../../context/map/MapContext";
import { PlacesContext } from "../../context/places/PlacesContext";

const BtnLocation = () => {
  const { map ,isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);


  const onClick = () => {
    if(!isMapReady) throw new Error('Map is not ready');
    if(!userLocation) throw new Error('User location is not ready'); 

    map?.flyTo({
      center: userLocation,
      essential: true,
      zoom: 14,
      animate: true,
    });
  } 

  return (
    <div className="btn btn-primary" style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      zIndex: 9999
    
    }}
    onClick={onClick}
    >
      Mi ubicación
    </div>
  )
}
export default BtnLocation;
export { BtnLocation };