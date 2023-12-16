import { useState, createContext } from 'react'
import {
  MapContainer,
  ScaleControl,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import GetCoordinates from '../components/GetCoordinates.jsx'
import MinimapControl from '../components/MiniMap.jsx'
import LayerControl from '../components/LayerControl.jsx'
import HomeButton from '../components/HomeButton.jsx';
import LocationButton from '../components/GetLocation.jsx';
import CardinalPoint from '../components/CardinalPoint.jsx';
import LeafletControlGeocoder from '../components/MapSearch.jsx';
import RoutingMachine from '../components/RoutingMachine.jsx';
import Direction from '../components/Direction.jsx';

export const MapContext = createContext()

export default function Map() {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([-6.306767484549966, 106.75655364990234])
  const [end, setEnd] = useState([-6.353292, 106.777251])
  const [directionButton, setDirectionButton] = useState(false)

  const toogleDirection = () => {
    setDirectionButton(directionButton => !directionButton)
  }

  return (
    <MapContext.Provider value={{ toogleDirection, setStart }}>
      <section className='map-container'>
        <MapContainer
          center={[-6.364357955363846, 106.78685849141458]}
          zoom={14}
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
