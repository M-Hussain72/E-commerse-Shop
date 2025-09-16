/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { ProductContext } from '../store/productContext';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function Filters({ categoryId, setLoading }) {
  const { fetchProducts, categories, productType } = useContext(ProductContext);

  const [filters, setFilters] = useState({
    categoryId: categoryId,
    productTypeId: '',
    sortBy: '',
    minPrice: 0,
    maxPrice: 2000,
    sizes: [],
  });

  async function onSubmit(e) {
    e.preventDefault();
    console.log(filters);
    setLoading(true);
    await fetchProducts(filters);
    setLoading(false);
  }

  function handleChange(key, value) {
    if (key === 'sizes') {
      setFilters((prev) => ({
        ...prev,
        sizes:
          prev.sizes.length > 0 && prev.sizes.includes(value)
            ? prev.sizes.filter((size) => size !== value)
            : [...prev.sizes, value],
      }));
    } else if (key === 'minPrice' || key === 'maxPrice') {
      setFilters((prev) => ({
        ...prev,
        minPrice: value[0],
        maxPrice: value[1],
      }));
    } else {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  }

  return (
    <div className=" xl:ml-14 mx-4 max-sm:hidden  md:w-[300px] w-[200px] h-fit bg-white border-[1px] border-gray-300 rounded-3xl ">
      <form className=" md:w-[260px] w-[190px] px-2 mx-auto my-4">
        <h3 className=" text-black text-lg font-semibold">Filters</h3>
        <div className=" border-gray-200 border-b-[1px] mx-auto my-4"></div>
        <div>
          {/* Types of product */}
          <ul className=" space-y-2 font-light text-sm text-black/70 mt-4">
            {productType.length > 0 &&
              productType.map((item, index) => (
                <li
                  key={index}
                  name="productType"
                  className={
                    ' flex justify-between py-1 px-2 rounded capitalize ' +
                    (filters.productTypeId === item._id
                      ? ' hover:bg-gray-300 bg-gray-300'
                      : ' hover:bg-gray-200')
                  }
                  onClick={() => handleChange('productTypeId', item._id)}
                >
                  <p>{item.type_name}</p>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    className="mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </li>
              ))}
          </ul>
        </div>
        <div className=" border-gray-200 border-b-[1px] mx-auto my-4"></div>

        <div>
          <h3 className=" text-black text-lg font-semibold my-4">Price</h3>
          <RangeSlider
            min={0}
            max={3000}
            defaultValue={[0, 3000]}
            onInput={(value) => handleChange('minPrice', value)}
          />
        </div>
        <div className=" border-gray-200 border-b-[1px] mx-auto   my-8"></div>
        <div>
          <h3 className=" text-black text-lg font-semibold">Size</h3>
          <ul className=" flex flex-wrap mt-4 space-x-2">
            {[
              'xx-small',
              's-small',
              'small',
              'medium',
              'large',
              'x-large',
              'xx-large',
              '3x-large',
              '4x-large',
            ].map((item, index) => (
              <li
                key={index}
                name="sizes"
                value={item}
                onClick={() => handleChange('sizes', item)}
                className={
                  filters.sizes.length !== 0 && filters.sizes.includes(item)
                    ? 'm-1 text-sm bg-black/70 text-white rounded-full py-2 px-4 w-fit uppercase cursor-pointer'
                    : ' m-1 text-sm text-black/60 bg-gray-200 rounded-full py-2 px-4 w-fit uppercase cursor-pointer'
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className=" border-gray-200 border-b-[1px] mx-auto my-4"></div>

        <h3 className=" text-black text-lg font-semibold">Dress Style</h3>
        <div>
          {/* Types of product */}
          <ul className=" space-y-2 font-light text-sm text-black/70 mt-4">
            {categories.length > 0 &&
              categories.map((item) => (
                <li
                  key={item._id}
                  className={
                    ' flex justify-between py-1 px-2 rounded ' +
                    (filters.categoryId === item._id
                      ? ' hover:bg-gray-300 bg-gray-300'
                      : ' hover:bg-gray-200')
                  }
                  onClick={() => handleChange('categoryId', item._id)}
                >
                  <p>{item.category_name}</p>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    className="mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.53073 0.469402L6.53073 5.4694C6.60065 5.53908 6.65613 5.62187 6.69399 5.71304C6.73184 5.8042 6.75133 5.90194 6.75133 6.00065C6.75133 6.09936 6.73184 6.1971 6.69399 6.28827C6.65613 6.37943 6.60065 6.46222 6.53073 6.5319L1.53073 11.5319C1.38984 11.6728 1.19874 11.752 0.999484 11.752C0.800227 11.752 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0007C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6.00003L0.46761 1.53065C0.326714 1.38976 0.247559 1.19866 0.247559 0.999403C0.247559 0.800145 0.326714 0.609049 0.46761 0.468153C0.608506 0.327257 0.799603 0.2481 0.99886 0.2481C1.19812 0.2481 1.38921 0.327257 1.53011 0.468153L1.53073 0.469402Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </li>
              ))}
          </ul>
        </div>

        <button
          type="submit"
          onClick={onSubmit}
          className="bg-black/85 mt-4 py-2 rounded-full focus:bg-black w-full text-white font-bold text-center"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
