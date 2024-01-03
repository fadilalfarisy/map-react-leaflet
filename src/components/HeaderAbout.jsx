export default function HeaderAbout() {
  return (
    <section id='home' className='pt-32 padding-x'>
      <div className='relative flex justify-center max-container flex-col items-center w-full max-xl:padding-x'>
        <p className='text-xl font-montserrat text-unique-blue'>
          Sistem Informasi Masjid Kecamatan Limo
        </p>
        <h1 className='mt-10 font-palanquin text-8xl text-center max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          Nikmati <span className='text-unique-blue mt-3'>11 Fitur</span>
          <br />
          yang Tersedia
        </h1>
        <p className='font-montserrat text-slate-gray text-center text-lg leading-8 mt-6 sm:max-w-md'>
          Sistem website kami hadir dengan sejumlah fitur canggih yang dirancang untuk memberikan pengalaman yang optimal kepada pengguna
        </p>
      </div>
    </section>
  )
}