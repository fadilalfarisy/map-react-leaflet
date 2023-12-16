import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1, mosqueHero, mosqueLogo } from "../assets/images";
import { chevronLeft } from "../assets/icons";
import { useParams, useNavigate } from "react-router-dom";
import mosqueDetails from '../data/details-mosque.json'

const Details = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [mosqueInfo, setMosqueInfo] = useState(mosqueDetails.features[0].mosque)
  const navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    const findMosque = mosqueDetails.features.find((element) => {
      if (Number(id) == element.mosque.id) return true
    })
    if (!findMosque) {
      navigate("/404")
    }
    setMosqueInfo(findMosque)
  }, [])

  return (
    <section className="padding-x">

      <section
        id='details'
        className='w-full flex xl:flex-row flex-col justify-between min-h-screen max-container mb-36'
      >
        <div className='xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x'>

          <Link to='/map'>
            <img src={chevronLeft} alt="back-button" />
          </Link>
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

          <ul className="mosque-coordinate mb-14 ">
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

        <div className="flex flex-1 flex-col justify-center items-center pt-36">
          <img
            src={bigShoeImg}
            alt='shoe colletion'
            width={610}
            height={502}
            className='object-contain mb-12'
          />

          <div className='flex sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6'>
            {shoes.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Details;