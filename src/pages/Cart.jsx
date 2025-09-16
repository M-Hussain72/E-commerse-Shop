// import { useCart } from '../store/CartContext';
import { useContext, useEffect } from 'react';
import CartProductCard from '../components/CartProductCard';
import { CartContext } from '../store/CartContext';
import OrderSummary from '../components/OrderSummary';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <div className=" w-[89%] border-gray/30 border-b-[1px] mx-auto my-4"></div>
      <div className=" xl:ml-10 ml-4">
        <h1 className="font-[1000] text-4xl text-black">YOUR CART</h1>

        {cartItems.length > 0 ? (
          <div className=" min-[900px]:flex  block">
            <div className="  min-[900px]:w-[60%] min-[450px]:w-auto w-[345px]">
              <ul className=" border-[1px] mt-5 w-[97%] border-gray/30 rounded-3xl  p-4 ">
                {cartItems.map((item, index) => (
                  <>
                    <CartProductCard key={index} cartProduct={item} />
                    {cartItems.length != 1 && cartItems.length != index + 1 && (
                      <div className=" w-full border-gray/30 border-b-[1px] mx-auto my-4"></div>
                    )}
                  </>
                ))}
              </ul>
            </div>
            <div className=" min-[450px]:mr-4 mx-1">
              <OrderSummary deliveryFee={15} />
            </div>
          </div>
        ) : (
          <div className=" text-center">
            <h2 className=" mt-20  text-center font-semibold text-black/50">
              There are no items in this cart
            </h2>
            <Link to={'/'}>
              <button className=" text-black border-[1px] mt-4 rounded hover:bg-slate-200  border-black px-6 py-2 ">
                {' '}
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
