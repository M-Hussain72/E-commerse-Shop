// /* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom';
// import dropDownIcon from '../assets/dropDownIcon.svg';
// import { useState } from 'react';

// export default function NavBarMenuShop() {
//   const [showMenu, setShowMenu] = useState('hidden');

//   function mouseOver() {
//     setShowMenu(' block');
//   }

//   function mouseOut() {
//     setShowMenu(' hidden');
//   }

//   return (
//     <li className="  md:px-4 px-2" onMouseLeave={mouseOut}>
//       <Link to={'/shop'}>
//         <p className="flex" onMouseOver={mouseOver}>
//           Shop <img src={dropDownIcon} className=" mt-1  ml-2" />
//         </p>
//       </Link>
//       <div className={showMenu}>
//         <div className=" z-30 p-2 px-4 pt-6 shadow-xl absolute bg-white rounded-lg">
//           <div className=" flex flex-warp ">

//                 <div
//                   key={index}
//                   className="  flex-grow basis-0  mx-2  hover:cursor-pointer"
//                 >
//                   <Link to={'/casual'}>
//                     <h3 className=" hover:underline font-bold uppercase text-center mt-1">
//                       {' '}
//                       {item.type}
//                     </h3>
//                   </Link>
//                 </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// }
