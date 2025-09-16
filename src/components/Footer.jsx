import xIcon from '../assets/XIcon.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import githubIcon from '../assets/githubIcon.svg';

export default function Footer() {
  return (
    <>
      <div className=" bg-[#F0F0F0] mt-80   sm:mt-36 relative">
        <div className=" md:flex bg-black w-10/12  p-8 left-[10%] absolute top-[-20%]  rounded-xl ">
          <h1 className="font-[1000]  sm:w-[500px]   w-[250px] text-4xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className=" sm:w-[350px] w-[250px] ml-auto  mt-4">
            <input
              type="text"
              placeholder="Enter your Email address"
              className=" pl-4  p-2 focus:outline-none rounded-full sm:w-[300px] w-[250px] text-black bg-white"
            />
            <button
              name="submit"
              className="p-2 mt-4 rounded-full sm:w-[300px] w-[250px] text-black bg-white"
            >
              Subscribe the Newsletter
            </button>
          </div>
        </div>

        <div className=" h-full min-[800]px:py-28 sm:py-40 py-28 lg:mx-20 md:mx-5 mx-5  ">
          <div className=" sm:flex  justify-around ">
            <div className=" w-[280px] md:pt-8 block  mt-4 mx-1">
              <h2 className=" font-[1000] text-3xl text-black">SHOP.CO</h2>
              <p className=" text-black/50  mt-5">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex  space-x-2  py-4">
                <img src={xIcon} alt="X icon" />
                <img src={facebookIcon} alt="facebook Icon" />
                <img src={instagramIcon} alt="instagram Icon" />
                <img src={githubIcon} alt="github icon" />
              </div>
            </div>

            <div className=" block w-fit mt-4 mx-2">
              <h1 className=" text-black  text-lg uppercase">company</h1>
              <ul className=" text-black/50 text-sm  font-light capitalize space-y-5  mt-5">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>

            <div className="block w-fit mt-4 mx-1">
              <h1 className=" text-black  text-lg uppercase">help</h1>
              <ul className=" text-black/50 text-sm font-light capitalize space-y-5  mt-5">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="block w-fit mt-4 mx-1">
              <h1 className=" text-black  text-lg uppercase">FAQ</h1>
              <ul className=" text-black/50 text-sm font-light capitalize space-y-5  mt-5">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            <div className="block w-fit  mt-4 mx-1">
              <h1 className=" text-black  text-lg uppercase">Resources</h1>
              <ul className=" text-black/50 text-sm font-light capitalize space-y-5  mt-5">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
