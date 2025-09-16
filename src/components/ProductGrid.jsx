/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import notFoundIcon from '../assets/notFound.png';
import { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../store/productContext';
import Loading from './Loading';

function ProductGrid({ category, loading, setLoading }) {
  const { products, fetchProducts } = useContext(ProductContext);
  const [page, setPage] = useState(1);

  const [categoryState, setCategoryState] = useState(() => {
    return (
      category || JSON.parse(localStorage.getItem('selectedCategory')) || null
    );
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [page, loading]);

  useEffect(() => {
    if (category) {
      setCategoryState(category);
      localStorage.setItem('selectedCategory', JSON.stringify(category));
    } else {
      localStorage.setItem('selectedCategory', JSON.stringify({}));
    }
  }, [category]);

  useEffect(() => {
    console.log('Fetching products based on categoryState');
    const filter = categoryState ? { categoryId: categoryState._id } : {};
    getProduct(filter);
  }, [categoryState]);

  const getProduct = async (filter) => {
    setLoading(true);
    await fetchProducts(filter);
    setLoading(false);
  };

  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setPage((prev) => prev + 1);

  return (
    <>
      {' '}
      {!loading ? (
        <div className=" w-[1050px] mx-4">
          <div className=" flex justify-between flex-wrap">
            <h2 className="text-black font-bold text-3xl capitalize">
              {category && category.category_name}
            </h2>
            {(products?.length || 0) > 0 ? (
              <div className=" flex flex-wrap my-4 items-center">
                <p className="text-black/60 text-sm mr-2">
                  Showing {(page * 12 - 12 === 0 && 1) || page * 12 - 12} -{' '}
                  {(page * 12 > (products?.length || 0) && products?.length) ||
                    page * 12}
                  {' of '}
                  <span>{products?.length || 0} products </span>
                </p>
                <label>
                  <span className="text-black/60 text-sm">Show By:</span>
                  <select className=" bg-white text-black mr-4">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </label>
              </div>
            ) : (
              ''
            )}
          </div>
          {(products?.length || 0) > 0 ? (
            <div>
              <ul className=" grid  grid-cols-2  lg:grid-cols-3  gap-4 ">
                {(products || [])
                  .slice(page * 12 - 12, page * 12)
                  .map((item, index) => (
                    <li key={index} className=" mx-auto">
                      <ProductCard item={item} />
                    </li>
                  ))}
              </ul>
              <div className=" w-11/12 my-8 border-gray/30 border-b-[1px]"></div>

              {/* for  pagination */}
              <div className=" w-11/12 flex justify-between text-xl  text-black/50  mt-6 ">
                <label>
                  {page === 1 ? (
                    <span className=" px-4 py-2 rounded bg-[#47b5ff7f] cursor-not-allowed text-white">
                      ◀️ Prev
                    </span>
                  ) : (
                    <span
                      onClick={prevPage}
                      className=" px-4 py-2 rounded bg-[#47B5FF] cursor-pointer text-white"
                    >
                      ◀️ Prev
                    </span>
                  )}
                </label>
                <label className=" space-x-4">
                  {[...Array(Math.ceil((products?.length || 0) / 12))].map(
                    (_, index) => (
                      <span
                        key={index}
                        className={
                          page == index + 1
                            ? 'text-[#47B5FF]  font-bold'
                            : ' cursor-pointer '
                        }
                        onClick={() => setPage(index + 1)}
                      >
                        {index + 1}
                      </span>
                    )
                  )}
                </label>
                <label>
                  {page === Math.ceil((products?.length || 0) / 12) ? (
                    <span className=" px-4 py-2 rounded bg-[#47b5ff7f] cursor-not-allowed text-white">
                      Next <span>▶️</span>
                    </span>
                  ) : (
                    <span
                      onClick={nextPage}
                      className=" px-4 py-2 rounded bg-[#3fabf3] cursor-pointer text-white"
                    >
                      Next <span>▶️</span>
                    </span>
                  )}
                </label>
              </div>
            </div>
          ) : (
            <div className="mt-8 items-center w-full">
              <img
                src={notFoundIcon}
                alt="Not Found Image"
                className=" w-[200px] mx-auto"
              />
              <h1 className=" text-black text-xl font-semibold text-center ">
                WE’RE SORRY, NO PRODUCTS FOUND.
              </h1>
            </div>
          )}
        </div>
      ) : (
        <Loading className={' left-[60%] top-[40%]'} />
      )}
    </>
  );
}

export default ProductGrid;
