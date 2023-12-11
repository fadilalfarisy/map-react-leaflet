import {
  LayersControl,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Polygon,
  GeoJSON
} from "react-leaflet"
import coordinat from '../data/coordinat.json'
import onEachFeature from '../components/Border.jsx';
import border from '../data/border.geojson.json'

export default function LayerControl() {
  return (
    <LayersControl position="topright">
      <LayersControl.Overlay name="Mosque Marker">
        <LayerGroup>
          {coordinat.features.map((mosque, index) => (
            <Marker key={index} position={[mosque.properties.latitude, mosque.properties.longitude]}>
              <Popup>
                <h2>{mosque.properties.name}</h2>
                <p>{mosque.properties.address}</p>
                <p>{mosque.properties.latitude}</p>
                <p>{mosque.properties.longitude}</p>
                <img src="https://lh5.googleusercontent.com/p/AF1QipM41T1Rle0Dy9Pyj2WABCydiuSvqAIgeVtiW4_0=w408-h544-k-no" alt="mosque" />
              </Popup>
            </Marker>
          ))}
        </LayerGroup>
      </LayersControl.Overlay>

      {/* <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          {data.map((element, index) => (
            <Polygon pathOptions={{ color: 'grey', fillColor: 'grey' }} positions={element.features[0].geometry.coordinates[0][0]} key={index} >
              <Popup><h3>{`Wilayah Kecamatan ${element.name}, Depok`}</h3></Popup>
            </Polygon>
          ))}
        </LayerGroup>
      </LayersControl.Overlay> */}

      <LayersControl.Overlay checked name="Border Region">
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