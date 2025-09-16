import { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import { ProductContext } from '../store/productContext';

function FeatureSection({ heading }) {
  const { fetchProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);

  const productFetching = async (filter) => {
    setLoading(true);
    const response = await fetchProducts(filter);
    console.log('-________----->');
    console.log(response);
    localStorage.setItem(heading, JSON.stringify(response));
    setLoading(false);
  };

  useEffect(() => {
    let filter = {};
    if (heading === 'new_arrivals') {
      filter.newArrivals = true;
    }
    // console.log(localStorage.getItem(heading));
    productFetching(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heading]);

  const featureProducts = JSON.parse(localStorage.getItem(heading)) || [];

  return (
    <div className=" mx-4">
      <h1 className="font-[1000] mt-16 mb-12 text-center text-4xl text-black uppercase">
        {heading.replaceAll('_', ' ')}
      </h1>
      {!loading ? (
        <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8  gap-4 ">
          {featureProducts
            ? featureProducts.slice(0, 4).map((item, key) => (
                <li key={key} role="button">
                  <ProductCard item={item} />
                </li>
              ))
            : ''}
        </ul>
      ) : (
        <ul>{[1, 2, 3, 4].map(() => {})}</ul>
      )}
      <div className=" text-center my-16  border-gray/30">
        <button className=" border-[1px] rounded-full font-medium py-2 px-12 text-black border-gray/30">
          View All
        </button>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default FeatureSection;
