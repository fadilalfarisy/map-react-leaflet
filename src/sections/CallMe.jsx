import Button from "../components/Button";
import { arrowRight } from '../assets/icons'
import telephoneHero from '../assets/images/telephone.jpg'

const CallMe = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={telephoneHero} alt='Special Offers' className='object-cover h-[500px] w-[500px] rounded-2xl' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          <span className='text-unique-blue'> Hubungi </span>Kami
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Selamat datang di halaman kontak kami! Kami senang mendengar dari Anda. Jika Anda memiliki pertanyaan, saran, atau hanya ingin berbicara, jangan ragu untuk menghubungi kami melalui salah satu opsi di bawah ini.
        </p>
        <div className='mt-11 w-fit flex flex-1 gap-x-5'>
          <Button label='Email' iconURL={arrowRight} />
          <Button textColor='text-slate-gray' backgroundColor='bg-white' borderColor='border-slate-gray' label='Telepon' />
        </div>
      </div>
    </section>
  )
}

export default CallMe