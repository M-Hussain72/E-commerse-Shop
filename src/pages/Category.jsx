import { Link, useLocation } from 'react-router-dom';
import ProductDisplaySection from '../components/productDisplaySection';

export default function Category() {
  let location = useLocation();

  return (
    <>
      <div className=" w-[89%] border-gray/30 border-b-[1px] mx-auto my-4"></div>
      <div className="mb-4 ml-16">
        <Link to={'/'} className=" text-black/40 text-sm">
          Home{' '}
        </Link>
        <span className=" text-black/70 text-sm capitalize">
          {location.pathname !== '/shop' && location.pathname}
        </span>
      </div>
      <ProductDisplaySection location={location} />
    </>
  );
}
