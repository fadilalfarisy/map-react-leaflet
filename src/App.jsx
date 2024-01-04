
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Map from "./pages/Map.jsx";
import Footer from "./sections/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Details from "./pages/Details.jsx";
import NotFound from "./sections/NotFound.jsx";
import News from './pages/News.jsx'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/mosque/:id" element={<Details />} />
        <Route path='*' element={< NotFound />} />
      </Routes>
      <section className='bg-black padding-x py-10'>
        <Footer />
      </section>
    </>
  );
}

export default App;