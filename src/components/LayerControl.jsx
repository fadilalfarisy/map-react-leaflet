import {
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  GeoJSON,
  Polygon,
  Polyline
} from "react-leaflet"
import coordinat from '../constants/details-mosque.js'
import onEachFeature from '../components/Border.jsx';
import border from '../data/border.geojson.json'
import street from '../data/jalan.geojson.json'
import L from 'leaflet'
import { mosqueMarker } from '../assets/icons'
import MosqueModal from "./MosqueModal.jsx";
import limo from '../data/limo.json'

const mosqueIcon = new L.Icon({
  iconUrl: mosqueMarker,
  iconSize: [36, 36], // size of the icon
});

export default function LayerControl() {
  return (
    <LayersControl position="topright">
      <LayersControl.Overlay checked name="Mosque Marker" >
        <LayerGroup>
          {coordinat.features.map((element, index) => (
            <Marker key={index} icon={mosqueIcon} position={[element.mosque.latitude, element.mosque.longitude]}>
              <Popup>
                <MosqueModal
                  id={element.mosque.id}
                  imgURL={element.mosque.thumbnail}
                  name={element.mosque.name}
                  address={element.mosque.address}
                  latitude={element.mosque.latitude}
                  longitude={element.mosque.longitude}
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

      <LayersControl.Overlay name="Depok Street">
        <LayerGroup>
          {street.features.map((element, index) => (
            // console.log(element.geometry.coordinates[0])
            <Polyline pathOptions={{ color: 'purple', weight: 6 }} positions={element.geometry.coordinates[0]} key={index} >
              <Popup><h3>{`${element.properties.nama_jalan}`}</h3></Popup>
            </Polyline>
          ))}
        </LayerGroup>
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