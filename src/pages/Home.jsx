import {
  Hero,
  PopularMosque,
  CriteriaMosque,
} from '../sections';

const Home = () => {
  return (
    <>
      <section className='padding-x'>
        <Hero />
      </section>
      <section className='padding-x'>
        <PopularMosque />
      </section>
      <section className='padding padding-x sm:py-32 py-16'>
        <CriteriaMosque />
      </section>
    </>
  );
}

export default Home;