import { useEffect, useState } from "react";
import { mosqueLogo } from "../assets/images";
import { chevronLeft, star } from "../assets/icons";
import { useParams, useNavigate } from "react-router-dom";
import mosqueDetails from '../constants/details-mosque.js'
import { ChevronLeft, ChevronRight } from "react-feather"


const slides = [
  'https://i.ibb.co/B3s7v4h/2.png',
  'https://i.ibb.co/XXR8kzF/3.png',
  'https://i.ibb.co/yg7BSdM/4.png'
]

const Details = ({
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {

  const [mosqueInfo, setMosqueInfo] = useState(mosqueDetails.features[0].mosque)
  const [slides, setSlides] = useState([])

  const navigate = useNavigate()
  let { id } = useParams()

  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    const findMosque = mosqueDetails.features.find((element) => Number(id) == element.mosque.id)
    if (!findMosque) navigate("/404")
    setMosqueInfo(findMosque)
    setSlides(findMosque.mosque.images)

    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <section className="padding-x">

      <section
        id='details'
        className='w-full flex xl:flex-row flex-col gap-36 justify-between min-h-screen max-container mb-36'
      >
        <div className='xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-24'>

          <img
            src={chevronLeft}
            alt="back-button"
            onClick={() => (navigate(-1))}
          />
          <div className="flex flex-col items-center w-full">
            <img className="w-20" src={mosqueLogo} alt="mosque-logo" />
            <p className='text-sm font-montserrat text-unique-blue text-center'>
              Website GIS Masjid Sekitar Limo, Depok
            </p>
          </div>

          <h1 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span>Masjid</span>
            <br />
            <span className='text-unique-blue mt-3'>{mosqueInfo?.mosque?.name}</span>
          </h1>

          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 text-justify'>
            {mosqueInfo?.mosque?.info}
          </p>

          <div className="flex justify-start gap-2.5">
            <img src={star} alt="rating" width={16} height={16} />
            <p className='font-montserrat text-lg leading-normal text-slate-gray'>{mosqueInfo?.mosque?.rating} ({mosqueInfo?.mosque?.reviews})</p>
          </div>

          <ul className="mosque-coordinate mb-14">
            <li className='font-montserrat text-slate-gray text-lg leading-8 text-justify'>
              <span>Latitude</span>: {mosqueInfo?.mosque?.latitude}
            </li>
            <li className='font-montserrat text-slate-gray text-lg leading-8 text-justify'>
              <span>Longnitude</span>: {mosqueInfo?.mosque?.longitude}
            </li>
          </ul>

          <h1 className="font-montserrat text-2xl max-sm:text-[36px] font-bold mb-6">Fasilitas :</h1>
          <div className='flex justify-start items-start flex-wrap w-full gap-6'>
            {mosqueInfo.mosque?.facilities.map((stat, index) => (
              <div key={index}>
                <p className='font-montserrat selection:text-xl py-2 px-6 bg-unique-blue text-white'>{stat}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides.map((element) => (
                <img src={element} className="object-cover" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
              >
                <ChevronRight size={40} />
              </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <div className={`transition-all w-3 h-3 bg-white rounded-full${curr === i ? "p-2" : "bg-opacity-50"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Details;