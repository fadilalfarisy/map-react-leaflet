import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  Subscribe,
} from '../sections';

const About = () => {
  return (
    <>
      <section className='pt-69 pb-10 padding-x'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </>
  );
}

export default About;