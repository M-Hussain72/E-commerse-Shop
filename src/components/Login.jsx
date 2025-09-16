import { useContext, useEffect, useRef } from 'react';
import Modal from './Modal';
import { useFormik } from 'formik';
import { LSVisibilityCtx } from '../store/LSVisibilityCtx.jsx';
import { loginSchema } from '../schema/loginSchema.js';
import FormInput from './FormInput.jsx';
import { AuthContext } from '../store/AuthContext.jsx';
export default function Login() {
  const { currentState, hideLogin, showSignUp } = useContext(LSVisibilityCtx);
  const { loginUser } = useContext(AuthContext);
  const modal = useRef();

  useEffect(() => {
    if (currentState === 'login') {
      modal.current.open();
    } else {
      modal.current.close();
    }
  }, [currentState]);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  async function onSubmit() {
    await loginUser(values);
    alert('success full Login');
    resetForm();
    hideLogin();
  }

  return (
    <Modal
      ref={modal}
      className=" pb-5 bg-transparent   "
      onClose={currentState === 'login' ? hideLogin : null}
    >
      <div
        className=" fixed top-0 left-0 w-full h-full "
        onClick={hideLogin}
      ></div>
      <div className="modal px-6 pt-4 pb-2 relative  bg-white rounded-2xl shadow-lg">
        <div className=" mt-4 text-center">
          <h1 className=" text-black/80 font-bold text-xl ">Welcome</h1>
          <h3 className=" text-black/70 font-medium">
            Sign in to your account
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <FormInput
            label={'Email'}
            id={'email'}
            error={errors.email && touched.email}
            errorMessage={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <FormInput
            label={'Password'}
            id={'password'}
            error={errors.password && touched.password}
            errorMessage={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          <div className=" flex w-full my-2 justify-end">
            <p
              role="button"
              className=" capitalize w-fit underline text-black/70"
            >
              forgot password?
            </p>
          </div>
          <button
            type="submit"
            name="submit"
            className=" w-full my-4 py-2 hover:bg-black/90 bg-black/85 text-white uppercase text-center rounded-full"
            disabled={isSubmitting}
          >
            Login
          </button>
        </form>
        <div className=" text-center my-4">
          <p className=" text-black/70">
            Don&apos;t have account?{' '}
            <span
              onClick={() => showSignUp()}
              className=" underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}
