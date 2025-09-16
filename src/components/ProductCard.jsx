/* eslint-disable react/prop-types */
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

// className = '  min-[1200px]:w-[300px] min-[1200px]:h-[305px]  lg:w-[250px] lg:h-[255px] min-[930px]:h-[200px]  min-[930px]:w-[204px] min-[800px]:w-[250px] min-[800px]:h-[255px] w-[155px] h-[170px] ';

export default function ProductCard({ item }) {
  return (
    <Link
      to={`/${item.product_name}/${item._id}`}
      className=" group cursor-pointer "
    >
      <div className="bg-[#F0EEED] rounded-xl w-full  max-[450px]:w-fit  shadow  overflow-hidden group-hover:shadow-xl ">
        <img
          src={(item.images && item.images[0]) || '/src/public/T-shirt3.png'}
          alt="Product image"
          className=" w-full  max-[450px]:h-[175px] rounded-xl"
        />
      </div>
      <p className="text-black mt-4 text-lg font-bold">{item.product_name}</p>
      <div className="flex">
        <ReactStars value={item.rating} size={20} isHalf={true} edit={false} />
        <p className="text-black/50 ml-2 pt-[4px]">
          <span className="text-black"> {item.rating.toFixed(1)}</span>/5
        </p>
      </div>
      <div className=" flex flex-wrap">
        {item.discount > 0 ? (
          <>
            <p className=" text-black font-bold min-[450px]:text-xl text-lg">
              ${(item.price - (item.price / 100) * item.discount).toFixed(1)}
            </p>
            <p className=" min-[450px]:ml-2 ml-[2px] line-through text-black/35 font-bold sm:text-xl sm:mt-0 mt-2 text-sm">
              ${item.price}
            </p>
            <div>
              <p className=" ml-2 text-red-500 bg-red-100 py-1 min-[450px]:px-3 px-1 min-[450px]:text-sm text-xs rounded-full">
                -{item.discount}%
              </p>
            </div>
          </>
        ) : (
          <p className=" text-black font-bold text-2xl">${item.price}</p>
        )}
      </div>
    </Link>
  );
}
