import { useContext, useEffect, useRef } from 'react';
import Modal from './Modal';
import { LSVisibilityCtx } from '../store/LSVisibilityCtx';
import { useFormik } from 'formik';
import SignUpSchema from '../schema/signUpSchema';
import FormInput from './FormInput';

export default function SignUp() {
  const { currentState, hideSignUp, showLogin } = useContext(LSVisibilityCtx);
  const modal = useRef();

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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit,
  });

  useEffect(() => {
    if (currentState === 'signup') {
      modal.current.open();
    } else {
      modal.current.close();
    }
  }, [currentState]);

  return (
    <Modal
      ref={modal}
      className="pb-8 bg-transparent "
      onClose={currentState === 'signup' ? hideSignUp : null}
    >
      <div
        className=" fixed top-0 left-0 w-full h-full "
        onClick={hideSignUp}
      ></div>
      <div className=" modal px-6 pt-8 pb-2 relative  bg-white rounded-2xl shadow-lg">
        <div className="  text-center">
          <h1 className=" text-black/80 font-bold text-2xl ">Welcome</h1>
          <h3 className=" text-black/70 font-medium">Create your account</h3>
        </div>
        <form onSubmit={handleSubmit} className=" max-w-[365px]">
          <FormInput
            label={'First Name'}
            id={'firstName'}
            error={errors.firstName && touched.firstName}
            errorMessage={errors.firstName}
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormInput
            label={'Last Name'}
            id={'lastName'}
            error={errors.lastName && touched.lastName}
            errorMessage={errors.lastName}
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormInput
            label={'Email'}
            id={'email'}
            error={errors.email && touched.email}
            errorMessage={errors.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormInput
            label={'Password'}
            id={'password'}
            error={errors.password && touched.password}
            errorMessage={errors.password}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormInput
            label={'Confirm Password'}
            id={'confirmPassword'}
            error={errors.confirmPassword && touched.confirmPassword}
            errorMessage={errors.confirmPassword}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button
            type="submit"
            name="submit"
            className=" w-full my-4 mt-6 py-2  hover:bg-black/90 bg-black/80 text-white uppercase text-center rounded-full"
            disabled={isSubmitting}
          >
            sign up
          </button>
        </form>
        <div className=" text-center my-4">
          <p className=" text-black/70">
            Already have an account?{' '}
            <span
              onClick={() => showLogin()}
              className=" underline cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}
