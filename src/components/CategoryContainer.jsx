import { Link } from 'react-router-dom';
import actor1 from '../assets/actor1.png';
import actor2 from '../assets/actor2.png';
import actor3 from '../assets/actor3.png';
import actor4 from '../assets/actress1.png';

export default function CategoryContainer() {
  return (
    <>
      <div className=" p-8 rounded-3xl bg-[#F0F0F0] w-9/12 mx-auto">
        <h1 className="font-[1000] mb-12 text-center text-4xl text-black">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-10 mx-auto">
          <div className=" lg:col-span-1 col-span-2 bg-white   h-[250px] rounded-3xl overflow-hidden hover:shadow-xl">
            <Link to={'./casual'}>
              <div
                className="ml-[10px]  w-[500px] h-[300px] relative  "
                style={{
                  backgroundImage: `url(${actor1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <p className="text-black font-bold text-2xl ml-6 pt-6 relative z-10">
                  Casual
                </p>
              </div>
            </Link>
          </div>
          <div className="col-span-2 bg-white h-[250px] rounded-3xl overflow-hidden hover:shadow-xl">
            <Link to={'./formal'}>
              <div
                className="ml-[30px]  w-[1200px] h-[540px]"
                style={{
                  backgroundImage: `url(${actor2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <p className="text-black font-bold text-2xl m-0 pt-6 relative z-10">
                  Formal
                </p>
              </div>
            </Link>
          </div>
          <div className="col-start-1 col-span-2 bg-white h-[250px] rounded-3xl overflow-hidden hover:shadow-xl">
            <Link to={'./party'}>
              <div
                className="ml-[30px]  w-[800px] h-[260px] flex-wrap-reverse "
                style={{
                  backgroundImage: `url(${actor4})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <p className="text-black font-bold text-2xl m-0 pt-6 relative z-10">
                  Party
                </p>
              </div>
            </Link>
          </div>
          <div className=" lg:col-span-1 col-span-2 bg-white h-[250px] rounded-3xl  overflow-hidden hover:shadow-xl  ">
            {/* <Link to={'./gym'}> */}
            <p className="text-black font-bold text-2xl ml-6 pt-6  z-10 absolute">
              Gym
            </p>
            <div
              className="  w-[400px] h-[300px]  mx-auto "
              style={{
                backgroundImage: `url(${actor3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
