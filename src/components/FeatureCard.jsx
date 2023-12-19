const FeatureCard = ({ title, description, index }) => {
  return (
    <div className="w-full lg:w-1/5 rounded-[20px] shadow-3xl p-10">
      <div className="w-11 h-11 justify-center items-center bg-unique-blue rounded-full flex">
        <h1 className="font-bold font-montserrat text-white">{index + 1}</h1>
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{title}</h3>
      <p className="mt-3 font-montserrat break-words">{description}</p>
    </div>
  )
}

export default FeatureCard;