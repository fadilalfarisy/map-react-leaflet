import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import mosqueCriteria from '../assets/images/criteria-mosque.jpg'

const CriteriaMosque = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Temukan
          <span className='text-unique-blue'> Kriteria </span>
          <span className='text-unique-blue'>Masjid </span> Favorit Kamu
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Temukan masjid ternyaman dengan fasilitas yang lengkap dan tentukan semuanya sesuai dengan kebutuhan kalian.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Sistem kami akan memberikan informasi detail tentang apa kebutuhan dan kriteria masjid favorit kamu.

        </p>
        <div className='mt-11 w-fit flex flex-1 gap-x-5'>
          <Button label='Temukan Sekarang' iconURL={arrowRight} />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={mosqueCriteria}
          alt='product detail'
          className='object-cover h-[375px] w-[375px] rounded-2xl'
        />
      </div>
    </section>
  );
};

export default CriteriaMosque;