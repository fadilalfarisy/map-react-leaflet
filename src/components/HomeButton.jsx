import { useEffect } from "react";
import "./css/home-button.css";
import L from "leaflet";

const center = [-0.2519107963944983, 117.69459237868406]

const HomeButton = ({ map }) => {
  useEffect(() => {
    if (!map) return;
    document.body.classList["add"]("show-button-home");
    const customControler = L.Control.extend({
      options: {
        position: "topleft",
      },

      onAdd: function () {
        const btn = L.DomUtil.create("button", "back-to-home");
        btn.title = "Home";
        btn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"></path></svg>';

        btn.onclick = function () {
          map.setView(center, 5)
        };

        return btn;
      },
    });

    map.addControl(new customControler());
  }, [map]);

  return null;
};

export default HomeButton