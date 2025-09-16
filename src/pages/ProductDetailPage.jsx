import { useParams } from 'react-router-dom';
import ProductDetailContainer from '../components/ProductDetailContainer';
import { useEffect } from 'react';

export default function ProductDetailPage() {
  const { productId } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <div className=" w-[95%] border-gray/30 border-b-[1px] mx-auto my-4"></div>
      <ProductDetailContainer productId={productId} />
    </>
  );
}
