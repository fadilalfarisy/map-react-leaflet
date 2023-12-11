import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const GetCoordinates = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create('div', 'legend');
    L.DomEvent.disableClickPropagation(info);
    const positon = L.Control.extend({
      options: {
        position: 'bottomleft'
      },

      onAdd: function () {
        info.textContent = 'Click on map';
        return info;
      }
    })

    map.on('click', (e) => {
      console.log(e.latlng)
      info.textContent = `Lat: ${e.latlng.lat} Long: ${e.latlng.lng}`;
    })

    map.addControl(new positon());


    // const message = L.Control.extend({
    //   options: {
    //     position: "bottomleft"
    //   },

    //   onAdd: function () {
    //     const message = L.DomUtil.create("div", "legend");
    //     message.textContent = "Click Map to Get Coordinates";
    //     return message;
    //   },
    // });

    // map.addControl(new message());

  }, [map])

  return null
}

export default GetCoordinates