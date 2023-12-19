const ProfileCard = ({ imgURL, name, nim }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={imgURL}
        alt={name}
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <h3 className="mt-6 font-montserrat text-2xl text-center font-semibold">{name}</h3>
      <p className='mt-1 max-w-sm text-center info-text'>{nim}</p>
    </div>
  )
}

export default ProfileCard