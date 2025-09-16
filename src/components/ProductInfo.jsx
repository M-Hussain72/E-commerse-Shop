/* eslint-disable react/prop-types */
import ReactStars from 'react-rating-stars-component';
import AddToCartButton from './AddToCartButton';
import QuantitySelector from './QuantitySelector';
import { useContext, useState } from 'react';
import { CartContext } from '../store/CartContext';
import { defaultVariant, mapObjectArrayToKeyArray } from './function';

export default function ProductInfo({ product }) {
  const { addToCart } = useContext(CartContext);
  const [formData, setFormData] = useState(defaultVariant(product.variants));
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const removeQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  function handleChange(value, action) {
    if (action === 'SET-COLOR') {
      setFormData((prev) => ({ ...prev, color: value }));
    }
    if (action === 'SET-SIZE') {
      setFormData((prev) => ({ ...prev, size: value }));
    }
  }

  function handleSubmit() {
    console.log(formData);
    const selectVariant = product.variants.filter(
      (item) => item.color === formData.color && item.size === formData.size
    );
    const selectVariantId = selectVariant[0]._id;
    addToCart({
      productId: product._id,
      variantId: selectVariantId,
      name: product.product_name,
      price: product.price,
      image: product.images[0],
      color: formData.color,
      size: formData.size,
      quantity: quantity,
      discount: product.discount,
    });
  }

  return (
    <div className=" ml-4 lg:w-[590px] md:w-[400px] w-[90%] min-[840px]:mt-0 mt-8">
      <h1 className=" font-[1000] text-4xl text-black text-wrap">
        {product.product_name}
      </h1>

      <div className="flex">
        <ReactStars
          value={product.rating}
          size={30}
          isHalf={true}
          edit={false}
        />
        <p className="text-black/50 text-xl ml-2 pt-[9px]">
          <span className="text-black"> {product.rating}</span>
          /5
        </p>
      </div>

      <div className=" flex mt-2">
        {product.discount > 0 ? (
          <>
            <p className=" text-black font-bold text-3xl">
              $
              {(
                product.price -
                (product.price / 100) * product.discount
              ).toFixed(1)}
            </p>
            <p className=" mx-4 line-through text-black/35 font-bold text-3xl">
              ${product.price}
            </p>
            <div>
              <p className=" text-red-500 bg-red-100 py-1 px-3  rounded-full">
                -{product.discount}%
              </p>
            </div>
          </>
        ) : (
          <p className=" text-black font-bold text-3xl">${product.price}</p>
        )}
      </div>

      <p className=" text-black/50 text-sm mt-2 text-wrap">
        {product.description}
      </p>
      <div className=" w-full  border-gray-200 border-b-[1px] my-4 "></div>
      <div>
        {/* Select Color Portion */}
        <p className="  text-black/60  text-lg">Select Color</p>
        <div className=" mt-4 space-x-2 flex">
          {product &&
            mapObjectArrayToKeyArray(product.variants, 'color').map(
              (item, index) => (
                <p
                  key={index}
                  className={
                    formData.color === item
                      ? 'py-4 border-[1px] border-black/70 px-[14px] w-fit rounded-full'
                      : 'py-4  border-[1px] border-black/50  px-[21px] w-fit rounded-full'
                  }
                  style={{ backgroundColor: item }}
                  onClick={() => handleChange(item, 'SET-COLOR')}
                >
                  {formData.color === item && (
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5306 2.03051L5.5306 10.0305C5.46092 10.1004 5.37813 10.1559 5.28696 10.1938C5.1958 10.2316 5.09806 10.2511 4.99935 10.2511C4.90064 10.2511 4.8029 10.2316 4.71173 10.1938C4.62057 10.1559 4.53778 10.1004 4.4681 10.0305L0.968098 6.53051C0.898333 6.46074 0.842993 6.37792 0.805236 6.28677C0.76748 6.19562 0.748047 6.09792 0.748047 5.99926C0.748047 5.9006 0.76748 5.8029 0.805236 5.71175C0.842993 5.62059 0.898333 5.53777 0.968098 5.46801C1.03786 5.39824 1.12069 5.3429 1.21184 5.30515C1.30299 5.26739 1.40069 5.24796 1.49935 5.24796C1.59801 5.24796 1.69571 5.26739 1.78686 5.30515C1.87801 5.3429 1.96083 5.39824 2.0306 5.46801L4.99997 8.43738L12.4693 0.969257C12.6102 0.828361 12.8013 0.749207 13.0006 0.749207C13.1999 0.749207 13.391 0.828361 13.5318 0.969257C13.6727 1.11015 13.7519 1.30125 13.7519 1.50051C13.7519 1.69976 13.6727 1.89086 13.5318 2.03176L13.5306 2.03051Z"
                        fill={item === 'white' ? 'black' : 'white'}
                      />
                    </svg>
                  )}
                </p>
              )
            )}
        </div>
        <div className="  border-gray-200 border-b-[1px] my-4"></div>

        {/* Select the Size */}
        <p className=" text-black/60  text-lg ">Select Size</p>
        <div className=" mt-2  flex flex-wrap ">
          {product &&
            mapObjectArrayToKeyArray(product.variants, 'size').map(
              (item, index) => (
                <p
                  key={index}
                  role="button"
                  className={
                    formData.size === item
                      ? ' mr-2 mt-2 px-4 py-2 bg-black text-white rounded-full font-extralight  uppercase'
                      : ' mr-2 mt-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-extralight uppercase'
                  }
                  onClick={() => handleChange(item, 'SET-SIZE')}
                >
                  {item}
                </p>
              )
            )}
        </div>
        <div className="  border-gray-200 border-b-[1px] mt-4"></div>
        <div className="flex">
          <QuantitySelector
            className={'w-[150px]'}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
            quantity={quantity}
          />
          <AddToCartButton
            onClick={handleSubmit}
            productName={product.product_name}
          />
        </div>
      </div>
    </div>
  );
}
