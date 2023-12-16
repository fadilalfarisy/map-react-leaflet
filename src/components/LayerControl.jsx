import {
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  GeoJSON,
  Polygon,
} from "react-leaflet"
import coordinat from '../data/coordinat.json'
import onEachFeature from '../components/Border.jsx';
import border from '../data/border.geojson.json'
import L from 'leaflet'
import { mosqueMarker } from '../assets/icons'
import MosqueCard from "./MosqueCard.jsx";
import limo from '../data/limo.json'

const mosqueIcon = new L.Icon({
  iconUrl: mosqueMarker,
  iconSize: [36, 36], // size of the icon
  // iconAnchor: [20, 58], // changed marker icon position
  // popupAnchor: [0, -60], // changed popup position
});

export default function LayerControl() {
  return (
    <LayersControl position="topright">
      <LayersControl.Overlay checked name="Mosque Marker" >
        <LayerGroup>
          {coordinat.features.map((mosque, index) => (
            <Marker key={index} icon={mosqueIcon} position={[mosque.properties.latitude, mosque.properties.longitude]}>
              <Popup>
                <MosqueCard
                  id={mosque.properties.id}
                  imgURL={"https://lh5.googleusercontent.com/p/AF1QipM41T1Rle0Dy9Pyj2WABCydiuSvqAIgeVtiW4_0=w408-h544-k-no"}
                  name={mosque.properties.name}
                  address={mosque.properties.address}
                  latitude={mosque.properties.latitude}
                  longnitude={mosque.properties.longitude}
                />
              </Popup>
            </Marker>
          ))}
        </LayerGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Limo Border">
        <LayerGroup>
          {limo.features.map((element, index) => (
            <Polygon pathOptions={{ fillColor: 'blue' }} positions={element.geometry.coordinates[0][0]} key={index} >
              <Popup><h3>{`${limo.name}, Depok, Jawa Barat`}</h3></Popup>
            </Polygon>
          ))}
        </LayerGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay checked name="Depok Border">
        <GeoJSON data={border} onEachFeature={onEachFeature} />
      </LayersControl.Overlay>

      <LayersControl.BaseLayer name="Openstreet">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Nat Geo World Map">
        <TileLayer
          attribution="Nat Geo World Map"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Google Satellite">
        <TileLayer
          attribution="Google Satellite Hybrid"
          url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer checked name="Google Maps">
        <TileLayer
          attribution="Google Maps"
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Google Roads">
        <TileLayer
          attribution="Google Roads"
          url="https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}"
        />
      </LayersControl.BaseLayer>
    </LayersControl>
  )
}