import { useRef } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function AddToCartButton({ productName, onClick }) {
  const modal = useRef();
  const navigate = useNavigate();

  function openModal() {
    modal.current.open();
  }

  function closeModal() {
    modal.current.close();
  }
  function handleClick() {
    onClick();
    openModal();
  }
  return (
    <>
      <Modal
        ref={modal}
        className={
          ' modal bg-white border-[1px] border-black/30 rounded-xl w-[350px] shadow-lg '
        }
      >
        <div className=" text-end mr-2 mt-2 ">
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 12L12 4M12 12L4 4"
                stroke="#2D2B2A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className=" ml-4">
          <h2 className=" text-2xl text-black font-bold"> {productName}</h2>
          <p className="  my-auto text-black">
            success fully added to your cart
          </p>
        </div>
        <div className=" flex flex-col mt-8 mx-auto w-fit ">
          <button
            className=" w-[200px] rounded-full bg-white text-black border-black border-[1px] px-4 py-2 uppercase"
            onClick={closeModal}
          >
            CONTINUE SHOPPING
          </button>
          <button
            className=" w-[200px] my-4 rounded-full bg-black text-white px-4 py-2 uppercase"
            onClick={() => navigate('/cart')}
          >
            {' '}
            Go to Cart
          </button>
        </div>
      </Modal>
      <div className=" pt-4">
        <button
          className="  py-2 bg-black font-medium rounded-full ml-4 lg:w-[400px] w-[200px] text-center"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
