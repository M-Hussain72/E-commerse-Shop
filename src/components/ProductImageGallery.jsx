/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ProductImageGallery({ productImages }) {
  const [selectImage, setSelectImage] = useState(productImages[0]);

  function handleSelectImage(value) {
    setSelectImage(value);
  }
  return (
    <div className=" grid min-[1200px]:grid-cols-12 grid-rows-8 min-[1200px]:gap-4 min-[1200px]:w-[700px] min-[450px]:w-[410px] w-[350px] min-[450px]:h-[500px] h-[450px] mx-auto">
      <div className=" min-[1200px]:col-span-3 min-[1200px]:block min-[1200px]:order-none row-span-2 grid grid-cols-3 order-1 gap-2">
        {productImages &&
          productImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleSelectImage(image)}
              className={
                selectImage === image
                  ? 'border-[1px] border-black rounded-2xl min-[450px]:m-2 m-0 bg-[#F0EEED] min-[1200px]:w-fit  max-[450px]:h-[102px] '
                  : 'min-[450px]:m-2 m-0 cursor-pointer min-[1200px]:w-full  min-[450px]:h-auto  h-[100px]'
              }
            >
              <img
                src={image}
                className=" min-[1200px]:w-[145px] min-[1200px]:h-[150px] max-[450px]:h-[100px] rounded-2xl w-full "
              />
            </div>
          ))}
      </div>

      <div className="m-2 min-[1200px]:col-span-9 row-span-6 r min-[1200px]:order-none min-[1200px]:h-[470px] min-[450px]:h-[360px] h-[300px] order-first mx-auto">
        <img
          src={selectImage}
          className="  min-[1200px]:h-[470px] min-[450px]:h-[360px] h-[300px] rounded-2xl"
        />
      </div>
    </div>
  );
}
