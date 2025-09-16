/* eslint-disable react/prop-types */
import plusIcon from '../assets/plusicon.svg';
import minusIcon from '../assets/minusIcon.svg';

export default function QuantitySelector({
  className,
  addQuantity,
  removeQuantity,
  quantity,
}) {
  return (
    <div
      className={
        ` bg-[#F0F0F0] flex justify-around py-2 rounded-full mt-4 ` + className
      }
    >
      <button onClick={() => removeQuantity()}>
        <img src={plusIcon} alt="plusicon" />
      </button>
      <span className=" text-black font-medium">{quantity}</span>
      <button onClick={() => addQuantity()}>
        <img src={minusIcon} alt="minusIcon" />
      </button>
    </div>
  );
}
