/* eslint-disable react/prop-types */
export default function FormInput({
  label,
  id,
  error,
  errorMessage,
  isRequired = true,
  ...props
}) {
  return (
    <label htmlFor={id}>
      <p className="text-black/60 mt-4 capitalize">
        {label}{' '}
        {isRequired ? <span className="text-red-600 font-bold">*</span> : ''}
      </p>

      <input
        id
        type={id}
        name={id}
        className=" min-[430px]:w-[365px] w-[280px] bg-white text-black focus:outline-none border-b-[1px] border-b-black/30 focus:border-b-black/60 "
        {...props}
      />
      {error && (
        <p className=" w-fit text-red-500 text-xs my-1 ">{errorMessage}</p>
      )}
    </label>
  );
}
