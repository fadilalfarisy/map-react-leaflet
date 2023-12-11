
import { Routes, Route } from "react-router-dom"
import Nav from './components/nav';
import Home from './pages/Home.jsx';
import Map from "./pages/Map.jsx";
import Footer from "./sections/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </>
  );
}

export default App;

// import { Routes, Route } from "react-router-dom"
// import { useEffect, useState } from 'react'
// import {
//   MapContainer,
//   ScaleControl,
//   GeoJSON
// } from 'react-leaflet'
// import "leaflet/dist/leaflet.css";
// import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
// import GetCoordinates from './components/GetCoordinates.jsx'
// import MinimapControl from './components/MiniMap.jsx'
// import LayerControl from './components/LayerControl.jsx'
// import HomeButton from './components/HomeButton.jsx';
// import LocationButton from './components/GetLocation.jsx';
// import CardinalPoint from './components/CardinalPoint.jsx';
// import LeafletControlGeocoder from './components/MapSearch.jsx';
// import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
// import RoutingMachine from './components/RoutingMachine.jsx';

// const App = () => {
//   const [map, setMap] = useState(null);
//   const [start, setStart] = useState([-6.307279351737612, 106.75449371337892])
//   const [end, setEnd] = useState([-6.340549632917069, 106.76891326904298])

//   return (
//     <MapContainer
//       center={[-0.2519107963944983, 117.69459237868406]}
//       zoom={5}
//       fullscreenControl={true}
//       ref={setMap}>

//       <LeafletControlGeocoder />
//       <LayerControl />
//       {/* <MinimapControl position="bottomright" />
//       <GetCoordinates />
//       <LocationButton map={map} />
//       <HomeButton map={map} />
//       <ScaleControl position="bottomleft" />
//       <CardinalPoint map={map} /> */}

//       {/* <RoutingMachine
//           position={'topright'}
//           start={start}
//           end={end}
//           color={'red'}
//         /> */}
//     </MapContainer>
//   )
// }

// export default App;