import { useEffect, useState, useContext, createContext } from 'react'
import {
  MapContainer,
  ScaleControl,
  GeoJSON
} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import GetCoordinates from '../components/GetCoordinates.jsx'
import MinimapControl from '../components/MiniMap.jsx'
import LayerControl from '../components/LayerControl.jsx'
import HomeButton from '../components/HomeButton.jsx';
import LocationButton from '../components/GetLocation.jsx';
import CardinalPoint from '../components/CardinalPoint.jsx';
import LeafletControlGeocoder from '../components/MapSearch.jsx';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import RoutingMachine from '../components/RoutingMachine.jsx';
import L from "leaflet";

const Direction = ({ map }) => {
  const toogleDirection = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    const customControler = L.Control.extend({
      options: {
        position: "bottomleft",
      },

      onAdd: function () {

        const direction = L.DomUtil.create("button");
        direction.title = "Direction";
        direction.innerHTML = `<svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0886 6.18499C10.8717 6.43163 10.8717 6.83153 11.0886 7.07817L13.1032 9.36842H5.55556C5.24873 9.36842 5 9.65119 5 10C5 10.3488 5.24873 10.6316 5.55556 10.6316H13.1032L11.0886 12.9218C10.8717 13.1685 10.8717 13.5684 11.0886 13.815C11.3056 14.0617 11.6574 14.0617 11.8743 13.815L14.8373 10.4466C15.0542 10.1999 15.0542 9.80005 14.8373 9.55341L11.8743 6.18499C11.6574 5.93834 11.3056 5.93834 11.0886 6.18499Z" fill="#000000"/>
        </svg>`;

        direction.onclick = function () {
          toogleDirection()
        };

        return direction;
      }
    });

    map.addControl(new customControler());
  }, [map]);

  return null;
};

const MapContext = createContext()

export default function Map() {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([-6.3845654734819695, 106.75689697265625])
  const [end, setEnd] = useState([-6.400260130793079, 106.87534332275392])
  const [directionButton, setDirectionButton] = useState(false)

  const toogleDirection = () => {
    setDirectionButton(directionButton => !directionButton)
  }

  return (
    <MapContext.Provider value={toogleDirection}>
      <section className='map-container'>
        <MapContainer
          center={[-0.2519107963944983, 117.69459237868406]}
          zoom={5}
          fullscreenControl={true}
          ref={setMap}>

          <LeafletControlGeocoder />
          <LayerControl />
          <MinimapControl position="bottomright" />
          <GetCoordinates />
          <LocationButton map={map} />
          <HomeButton map={map} />
          <ScaleControl position="bottomleft" />
          <CardinalPoint map={map} />
          <Direction map={map} />


          {directionButton ? <RoutingMachine
            position={'topright'}
            start={start}
            end={end}
            color={'red'}
          /> : <></>}

        </MapContainer>
      </section>
    </MapContext.Provider>
  )
}
