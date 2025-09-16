import CategoryContainer from '../components/CategoryContainer';
import FeatureContainer from '../components/FeatureContainer';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div>
        <FeatureContainer />
      </div>
      <CategoryContainer />
    </>
  );
}
