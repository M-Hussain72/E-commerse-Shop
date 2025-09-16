import * as yup from 'yup';

const passwordRule = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

const SignUpSchema = yup.object().shape({
  email: yup.string().email('please enter valid Email').required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  password: yup
    .string()
    .min(8)
    .matches(passwordRule, { message: 'suggest the strong password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'not matched the password')
    .required('Required'),
});
export default SignUpSchema;
