import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext, MapContext } from "../../context"
import Loading from "../loader/component";
import mapboxgl from "mapbox-gl";

function MapView() {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading, userLocation]);

  if (isLoading) {
    return <Loading />
  }
  return (
    <div ref={mapDiv} style={{
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      {userLocation?.join(', ')}
    </div>
  )
}
export default MapView;
