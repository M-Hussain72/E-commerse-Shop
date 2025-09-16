/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchSearchProduct } from './http';
import Loading from './Loading';

export default function SearchModal({ modalClose }) {
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue) {
      const timeOut = setTimeout(async () => {
        getProduct();
      }, 500);

      return () => clearTimeout(timeOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const getProduct = async () => {
    setLoading(true);
    await fetchSearchProduct(searchValue).then((response) => {
      setSearchProduct(response);
      setLoading(false);
    });
  };

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit() {
    getProduct();
    setSearchValue('');
  }

  function handelModalClose() {
    setSearchValue('');
    modalClose();
  }

  return (
    <>
      <div
        className=" fixed top-0 left-0 w-full h-full"
        onClick={handelModalClose}
      ></div>
      <div className=" relative  lg:w-[800px] md:w-[700px] min-[550px]:w-[500px] w-[350px] h-[450px] md:h-[500px] bg-white rounded-lg  overflow-scroll shadow-2xl shadow-black/40  ">
        <div className=" fixed rounded-t-lg  pl-4 pb-4 z-10 w-[inherit] bg-white">
          <h1 className=" text-black  text-xl uppercase pt-2 font-bold">
            Search
          </h1>
          <input
            type="text"
            className=" mt-4 w-[97%]  border-b-[1px] border-black focus:outline-none text-black bg-white"
            value={searchValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            onChange={handleChange}
          />
        </div>
        <div className="pl-4 mt-20 mr-4">
          <p className=" py-4 text-sm text-black font-semibold ">
            {searchProduct.length} results
          </p>

          {!loading ? (
            searchProduct.length !== 0 ? (
              <ul className=" grid md:grid-cols-3 grid-cols-2 gap-2 ">
                {searchProduct.map((item, index) => (
                  <li key={index} onClick={handelModalClose}>
                    <ProductCard item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="w-full mt-10 text-center ">
                <p className=" text-black font-medium  text-xl ">Not Found!</p>
              </div>
            )
          ) : (
            <Loading className={' left-[45%] top-[40%] '} />
          )}
        </div>
      </div>
    </>
  );
}
