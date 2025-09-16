import modalImage from '../assets/modalImage.png';
import versace from '../assets/versace.svg';
import calvinKlein from '../assets/calvinklein.svg';
import gucci from '../assets/gucci.svg';
import prada from '../assets/prada.svg';
import zara from '../assets/zara.svg';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/shop');
  }
  return (
    <>
      <div className=" bg-[#F2F0F1] flex">
        <div className=" ml-20 pb-20  pt-8 md:w-[650px] w-[500px] ">
          <h1 className="font-[1000] mt-[22px] md:text-7xl text-5xl text-black ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className=" text-black/50 mt-4 ">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            onClick={handleClick}
            className=" bg-black text-white my-8 px-14 py-3 rounded-full "
          >
            Shop Now
          </button>
          <ul className=" mt-4 flex   max-md:justify-center max-md:flex-wrap">
            <li className=" mr-8 pt-3">
              <h2 className=" text-black font-bold text-5xl ">200+</h2>
              <p className=" text-black/70 font-light ">International Brands</p>
            </li>
            <li className=" px-8 pt-3 border-l-[1px] md:border-r-[1px] border-black/10">
              <h2 className=" text-black font-bold text-5xl ">2,000+</h2>
              <p className=" text-black/70 font-light ">
                High-Quality Products
              </p>
            </li>
            <li className=" md:ml-8 pt-3  max-md:mt-4">
              <h2 className=" text-black font-bold text-5xl ">30,000+</h2>
              <p className=" text-black/70 font-light ">Happy Customers</p>
            </li>
          </ul>
        </div>
        <div className=" container overflow-hidden lg:block hidden ">
          <img src={modalImage} alt="image1" className=" image " />
        </div>
      </div>
      <div className=" bg-black flex  flex-wrap max-md:space-y-4 justify-evenly py-8">
        <img src={versace} className=" max-md:mt-4" />
        <img src={zara} />
        <img src={gucci} />
        <img src={prada} />
        <img src={calvinKlein} />
      </div>
    </>
  );
}
