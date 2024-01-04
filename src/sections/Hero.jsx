import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { mosqueHero } from "../assets/images";

const Hero = () => {

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x max-xl:padding-t'>
        <p className='text-xl font-montserrat text-unique-blue'>
          Sistem Informasi Masjid Kecamatan Limo
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' relative z-10 pr-10'>
            Temukan
          </span>
          <br />
          <span className='text-unique-blue inline-block mt-3'>Masjid</span> Terdekat!
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          <span className="italic">Website</span> kami akan membantu kamu untuk menemukan masjid terdekat di area kamu
        </p>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-14 sm:max-w-sm'>
          Selain lokasi masjid, website kami akan menyajikan berbagai fasilitas yang terdapat pada masjid yang kamu kunjungin
        </p>

        <Button label='Temukan sekarang!' iconURL={arrowRight} />

      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={mosqueHero} alt='Mosque Hero' className='object-center rounded-2xl max-xl:py-16' />
      </div>
    </section>
  );
};

export default Hero;