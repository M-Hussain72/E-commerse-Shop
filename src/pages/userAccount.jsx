import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { useFormik } from 'formik';
import userProfileSchema from '../schema/userProfileSchema';

export default function UserAccount() {
  const { userData } = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstName: userData.first_name ? userData.first_name : '',
      lastName: userData.last_name ? userData.last_name : '',
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: userProfileSchema,
    onSubmit,
  });

  return (
    <>
      <div className=" flex justify-between w-[85%]  mx-auto">
        <p>
          <Link to={'/'} className=" text-black/40 text-sm">
            Home /{' '}
          </Link>
          <span className=" text-sm text-black ">My Account</span>
        </p>
        <p className="text-black">
          Welcome!{' '}
          <span className=" font-bold">
            {userData.first_name} {userData.last_name}
          </span>{' '}
        </p>
      </div>
      <div className=" ml-[5%] mt-10 flex gap-8">
        <div className="pl-4">
          <h2 className="  font-bold text-black">Manage My Account</h2>
          <ul className=" pl-4 mt-4 space-y-2 text-black/60 text-sm">
            <li
              className="  hover:bg-gray-300 bg-gray-300
             px-1 cursor-pointer rounded"
            >
              My Profile
            </li>
            <li className=" hover:bg-gray-200 px-1 cursor-pointer rounded">
              Address Book
            </li>
            <li className=" hover:bg-gray-200 px-1 cursor-pointer rounded">
              My payment Option
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" mt-8 min-[450px]:w-[70%] w-[80%] mx-auto  "
        >
          <h1 className=" text-black font-bold text-2xl">Your Profile</h1>
          <div className=" mt-4 flex gap-4 flex-wrap justify-between">
            <FormInput
              label={'First Name'}
              id={'firstName'}
              error={errors.firstName && touched.firstName}
              errorMessage={errors.firstName}
              value={values.firstName ? values.firstName : userData.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <FormInput
              label={'Last Name'}
              id={'lastName'}
              error={errors.lastName && touched.lastName}
              errorMessage={errors.lastName}
              value={values.lastName ? values.lastName : userData.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <FormInput
            label={'Email'}
            id={'email'}
            value={userData.email}
            disabled
          />

          <div className=" mt-10">
            <p className=" text-black text-lg font-bold">Change Password:</p>
            <FormInput
              label={'Current Password'}
              id={'currentPassword'}
              value={values.currentPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              isRequired={false}
            />

            <FormInput
              label={'New Password'}
              id={'password'}
              error={errors.password && touched.password}
              errorMessage={errors.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isRequired={false}
            />

            <FormInput
              label={'Confirm New Password'}
              id={'confirmPassword'}
              error={errors.confirmPassword && touched.confirmPassword}
              errorMessage={errors.confirmPassword}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              isRequired={false}
            />
          </div>

          <div className=" mt-4 w-full text-end">
            <button
              type="submit"
              name="submit"
              className=" min-w-[130px]  my-4 mt-6 py-2  hover:bg-black/90 bg-black/80 text-white capitalize text-center rounded-full"
              disabled={isSubmitting}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
