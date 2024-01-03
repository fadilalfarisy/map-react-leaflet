import { Features } from '../sections';
import mapScreenShoot from '../assets/images/screenshoot.svg'
import HeaderAbout from '../components/HeaderAbout';

const About = () => {
  return (
    <>
      <HeaderAbout />
      <section className='padding'>
        <Features />
      </section>
      <section className='flex justify-center items-center padding-b'>
        <img
          src={mapScreenShoot}
          alt="map-screenshoot"
          className='max-h-screen shadow-3xl rounded-4xl' />
      </section>
    </>
  );
}

export default About;