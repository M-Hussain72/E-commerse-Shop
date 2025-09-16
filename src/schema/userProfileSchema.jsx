import * as yup from 'yup';

const passwordRule = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

const userProfileSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  currentPassword: yup.string(),
  password: yup
    .string()
    .nullable()
    .test(
      'require-current-password',
      'First, provide the current password',
      function (value) {
        const { currentPassword } = this.parent; // Access sibling fields
        if (value && !currentPassword) {
          return false; // Fail if password is provided but currentPassword is missing
        }
        return true;
      }
    )
    .test(
      'require-password-if-current',
      'Password cannot be empty if current password is provided',
      function (value) {
        const { currentPassword } = this.parent; // Access sibling fields
        if (currentPassword) {
          return value && value.trim() !== ''; // Ensure password is non-empty
        }
        return true; // Skip check if no currentPassword
      }
    )
    .min(8, 'Password must be at least 8 characters long')
    .matches(passwordRule, { message: 'Password is not strong enough' }),
  confirmPassword: yup
    .string()
    .test(
      'require-current-password',
      'First, provide the current password',
      function (value) {
        const { currentPassword } = this.parent; // Access sibling fields
        if (value && !currentPassword) {
          return false; // Fail if password is provided but currentPassword is missing
        }
        return true;
      }
    )
    .test(
      'require-confirmPassword-if-current',
      'Confirm Password cannot be empty if Password is provided',
      function (value) {
        const { currentPassword } = this.parent; // Access sibling fields
        if (currentPassword) {
          return value && value.trim() !== ''; // Ensure password is non-empty
        }
        return true; // Skip check if no currentPassword
      }
    )
    .oneOf([yup.ref('password')], 'not matched the password'),
});

export default userProfileSchema;
