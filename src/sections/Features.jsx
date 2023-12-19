import { features } from '../constants';
import FeatureCard from '../components/FeatureCard';

const Features = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {features.map((service, index) => (
        <FeatureCard
          key={service.label}
          index={index}
          title={service.title}
          description={service.description} />
      ))}
    </section>
  )
}

export default Features