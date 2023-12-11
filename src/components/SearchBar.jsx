import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const SearchBar = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const positon = L.Control.extend({
      options: {
        position: 'top'
      },

      onAdd: function () {
        const searchControl = new GeoSearchControl({
          provider: new OpenStreetMapProvider(),
          style: 'bar',
        });
        return searchControl;
      }
    })

    map.addControl(new positon());

  }, [map])

  return null
}

export default SearchBar