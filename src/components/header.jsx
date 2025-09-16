import { useContext, useEffect, useState } from 'react';
import SearchProduct from './SearchProduct';
import { Link } from 'react-router-dom';
import { CartContext } from '../store/CartContext';

import NavBarMenuShop from './navBarMenuShop.jsx';
import profileIcon from '../assets/profileIcon.svg';
import { LSVisibilityCtx } from '../store/LSVisibilityCtx.jsx';
import { AuthContext } from '../store/AuthContext.jsx';

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const { showLogin } = useContext(LSVisibilityCtx);
  const { userData, isLogin } = useContext(AuthContext);

  const totalCartItems = cartItems.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <div className=" mb-20">
      <div className="  top-0 left-0 right-0 fixed z-[9999] w-[100%] bg-white ">
        <div className="  w-[94%] mx-auto  bg-white flex py-4 justify-between  ">
          <Link to={'/'}>
            <p className=" font-[1000] text-3xl text-black">SHOP.CO</p>
          </Link>
          <ul className=" text-black items-center  w-[300px] mx-2 hidden  sm:flex md:w-[400px] md:text-base text-sm ">
            <NavBarMenuShop
              menu={[
                { type: 'men', image: '/src/assets/men.png' },
                { type: 'women', image: '/src/assets/women.png' },
              ]}
            />
            <li className="  md:px-4 px-2">On Sale</li>
            <li className="    md:px-4 px-2">New Arrivals</li>
            <li className="   md:px-4 px-2">Brands</li>
          </ul>
          <div className="flex items-center">
            <SearchProduct />
            <Link to={'/cart'} className=" ml-4 relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z"
                  fill="black"
                />
              </svg>
              {totalCartItems > 0 && (
                <span className=" text-white font-semibold bg-orange-500 p-[2px] px-[6px] rounded-full text-xs absolute top-[-12px] left-4">
                  {totalCartItems}
                </span>
              )}
            </Link>

            <label className=" ml-4">
              {isLogin ? (
                <div className=" group relative">
                  <img src={profileIcon} alt="icon here" className="  " />
                  <div className=" hidden group-hover:block absolute pl-2 pr-1  right-0  shadow  rounded-xl border-[1px] border-black/20 bg-white  z-[1] w-[100px] ">
                    <h4 className=" mt-2 text-sm text-black/70">
                      Hi, {userData.first_name}
                    </h4>
                    <ul className=" font-medium  text-sm text-black/70 ">
                      <li
                        key={1}
                        className=" my-1 hover:underline hover:text-black/80"
                      >
                        <Link to={'/myProfile'}>My Account</Link>
                      </li>
                      <li
                        key={2}
                        className=" mb-2 hover:underline hover:text-black/80"
                      >
                        <Link>Sign out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div role="button" onClick={() => showLogin()}>
                  <img src={profileIcon} alt="icon here" />
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
