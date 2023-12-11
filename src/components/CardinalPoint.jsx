import { useEffect } from 'react';
import L from 'leaflet';
import cardinalPoint from '../assets/icons/cardinal-points.svg'

const CardinalPoint = ({ map }) => {
  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "description");
      const image = `<img src=${cardinalPoint} style=width:100px;>`;

      div.innerHTML = image;

      return div;
    };

    legend.addTo(map);

  }, [map]);

  return null;
}

export default CardinalPoint