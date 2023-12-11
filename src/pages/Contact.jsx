import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  Subscribe,
} from '../sections';

const Contact = () => {
  return (
    <>
      <section className='pt-69 padding-x'>
        <section className='padding-t'>
          <SpecialOffers />
        </section>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </>
  );
}

export default Contact;