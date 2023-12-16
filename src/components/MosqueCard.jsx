import { Link, useNavigate } from "react-router-dom"

const MosqueCard = ({ id, imgURL, name, latitude, longnitude, address }) => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className="max-w-image min-w-image py-3">
      <img
        className="w-[200px] h-[150px] rounded-xl"
        src={imgURL}
        alt={name}
        onClick={goBack}
      />
      <h3 className='mt-3 text-lg font-bold font-montserrat text-black'>{name}</h3>
      <h3 className='text-sm font-montserrat'>{address}</h3>
      <div className="flex justify-center items-center gap-3">
        <p className='font-montserrat text-slate-gray'>{latitude}</p>
        <p>|</p>
        <p className='font-montserrat text-slate-gray'>{longnitude}</p>
      </div>
      <Link to={`/mosque/${id}`}>
        <button className="font-montserrat bg-unique-blue text-white py-2 w-full rounded-md text-center">Lihat Selengkapnya</button>
      </Link>
    </div>
  )
}

export default MosqueCard