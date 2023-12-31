import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),
});
