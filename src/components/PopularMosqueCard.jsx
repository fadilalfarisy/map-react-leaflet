import { star } from '../assets/icons';

const PopularMosqueCard = ({ imgURL, name, reviews, rating, address }) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] rounded-2xl" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>{rating} ({reviews})</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-montserrat leading-normal text-slate-gray'>{address}</p>
    </div>
  )
}

export default PopularMosqueCard