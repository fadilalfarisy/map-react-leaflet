import {
  CallMe,
  OurTeam
} from '../sections';

const Contact = () => {
  return (
    <>
      <section className='pt-69 padding-x'>
        <section className='padding-t'>
          <CallMe />
        </section>
      </section>
      <section className=' padding'>
        <OurTeam />
      </section>
    </>
  );
}

export default Contact;