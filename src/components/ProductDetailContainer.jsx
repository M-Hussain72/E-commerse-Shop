import { useCallback, useEffect, useState } from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import { fetchProductById } from './http';
import Loading from './Loading';

// eslint-disable-next-line react/prop-types
export default function ProductDetailContainer({ productId }) {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProduct = useCallback(async () => {
    setLoading(true);
    await fetchProductById(productId).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      {!loading ? (
        (product?.length || 0) === 0 ? (
          <p className=" text-center text-3xl text-black">Oops Not Found</p>
        ) : (
          <div className=" xl:ml-14 sm:ml-4 ml-2 min-[840px]:flex  ">
            <ProductImageGallery productImages={product[0].images} />
            <ProductInfo product={product[0]} />
          </div>
        )
      ) : (
        <div className=" h-svh">
          <Loading className={' top-[40%] left-[50%]'} />
        </div>
      )}
    </>
  );
}
