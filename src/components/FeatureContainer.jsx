import FeatureSection from './FeatureSection';
// import { newProducts, topProducts } from './data';

export default function FeatureContainer() {
  return (
    <>
      <FeatureSection heading="new_arrivals" />
      <div className=" w-11/12 border-gray/30 border-b-[1px] mx-auto"></div>
      <FeatureSection heading="top_selling" />
    </>
  );
}
