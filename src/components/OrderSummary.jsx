/* eslint-disable react/prop-types */
import { useContext } from 'react';
import ticketIcon from '../assets/ticketIcon.svg';
import { CartContext } from '../store/CartContext';

export default function OrderSummary({ deliveryFee }) {
  const { cartItems } = useContext(CartContext);

  const subTotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

  const discount = cartItems.reduce(
    (a, b) =>
      b.discount !== 0 ? a + (b.price * b.discount * b.quantity) / 100 : 0,
    0
  );
  return (
    <div className=" border-[1px] mt-5 min-[450px]:w-[400px] w-[350px] border-gray/30 rounded-3xl  p-4">
      <h2 className=" text-black font-semibold text-xl">Order Summary</h2>
      <div className="  mt-4">
        <li className=" flex justify-between">
          <p className=" text-black/60 capitalize">SubTotal</p>
          <span className=" text-black font-semibold ">${subTotal}</span>
        </li>
        <li className=" flex justify-between mt-2">
          <p className=" text-black/60 capitalize">Discount</p>
          <span className=" text-red-500 font-semibold ">
            -${discount.toFixed(2)}
          </span>
        </li>
        <li className=" flex justify-between mt-2">
          <p className=" text-black/60 capitalize">Delivery Fee</p>
          <span className=" text-black font-semibold">${deliveryFee}</span>
        </li>
        <div className="  border-[#F0F0F0] border-b-[1px] mx-auto my-4"></div>

        <li className=" flex justify-between">
          <p className=" text-black/80 capitalize">Total</p>
          <span className=" text-black font-semibold">
            ${(subTotal - discount + deliveryFee).toFixed(2)}
          </span>
        </li>
        <div className=" flex mt-4">
          <input
            type="text"
            className=" text-black/80 border-black px-4 focus:outline-none focus:border-[1px] pl-[26px] bg-[#F0F0F0] py-1 rounded-full placeholder:text-sm"
            placeholder=" Add promo code"
            style={{
              backgroundImage: `url(${ticketIcon})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: ' 15px 20px ',
              backgroundPosition: ' 7px 7px',
            }}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 text-sm rounded-full ml-4"
          >
            Apply
          </button>
        </div>
        <button className=" mt-4  py-2 bg-black font-medium rounded-full ml-4 min-[450px]:w-[320px] w-[280px] text-center">
          Go To Checkout
        </button>
      </div>
    </div>
  );
}
