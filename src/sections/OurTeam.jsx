import ReviewCard from "../components/ProfileCard"
import abdil from '../assets/images/abdillah.png'
import faisal from '../assets/images/faisal.png'
import fadil from '../assets/images/fadil.png'

const profile = [
  {
    imgURL: abdil,
    name: 'Abdillah Al Mushauwir',
    nim: 11200930000001
  },
  {
    imgURL: faisal,
    name: 'Faisal Rahman',
    nim: 11200930000019
  },
  {
    imgURL: fadil,
    name: 'Ahmad Fadil Alfarisy',
    nim: 11200930000027
  }
]

const OurTeam = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Our <span className="text-unique-blue">Team</span>
      </h3>
      <p className="info-text m-auto max-w-lg text-center">
        Founder dari GIS Masjid
      </p>
      <div className="mt-12 flex flex-1 justify-evenly max-lg:flex-col gap-14">
        {profile.map((element) => (
          <ReviewCard
            key={element.name}
            imgURL={element.imgURL}
            name={element.name}
            nim={element.nim}
          />
        ))}
      </div>
    </section>
  )
}

export default OurTeam