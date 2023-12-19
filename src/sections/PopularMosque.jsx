import { popularMosque } from '../constants';
import PopularMosqueCard from '../components/PopularMosqueCard';

const PopularMosque = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Masjid <span className='text-unique-blue'>Terpopuler</span></h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Temukan masjid terdekat di daerah anda dengan satu sistem yang kami buat</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-14'>
        {popularMosque.map((element, index) => (
          <PopularMosqueCard
            key={index}
            name={element.mosque.name}
            address={element.mosque.address}
            reviews={element.mosque.reviews}
            rating={element.mosque.rating}
            imgURL={element.mosque.imgURL}
          />
        ))}
      </div>
    </section>
  )
}

export default PopularMosque