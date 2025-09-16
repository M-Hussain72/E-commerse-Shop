/* eslint-disable react/prop-types */
import { useContext } from 'react';
import deleteIcon from '../assets/deleteIcon.svg';
import QuantitySelector from './QuantitySelector';
import { CartContext } from '../store/CartContext';

export default function CartProductCard({ cartProduct }) {
  const { addToCart, removeToCart, deleteToCart } = useContext(CartContext);

  return (
    <>
      <div className=" flex mt-4  ">
        <div className=" w-[100px] h-[100px] rounded-lg">
          <img
            src={cartProduct.image}
            alt="productImage"
            className="rounded-lg"
          />
        </div>
        <div className="ml-3 w-full flex justify-between">
          <div>
            <h3 className="text-black font-bold capitalize">
              {cartProduct.name}
            </h3>
            <p className="  text-black text-sm font-light">
              Size:
              <span className="text-gray-500 capitalize">
                {' '}
                {cartProduct.size}
              </span>
            </p>
            <p className=" text-black text-sm font-light">
              Color:
              <span className="text-gray-500 capitalize">
                {' '}
                {cartProduct.color}
              </span>
            </p>
            <h2 className=" text-black mt-4 text-xl font-extrabold">
              ${cartProduct.price}
            </h2>
          </div>
          <div>
            <img
              role="button"
              src={deleteIcon}
              alt="delete"
              className=" ml-auto"
              onClick={() => deleteToCart(cartProduct)}
            />
            <QuantitySelector
              className={' w-[120px] px-2 mt-12'}
              addQuantity={() => addToCart(cartProduct)}
              removeQuantity={() => removeToCart(cartProduct)}
              quantity={cartProduct.quantity}
            />
          </div>
        </div>
      </div>
    </>
  );
}
