import * as Yup from 'yup';

export const SignupSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Please enter your name'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Please enter your email'),

  phoneno: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Please enter your phone number'),

  college: Yup.string()
    .min(10, 'College name must be at least 10 characters')
    .max(100, 'College name must be at most 100 characters')
    .required('Please enter your college name'),

  address: Yup.string()
    .min(16, 'Address must be at least 16 characters')
    .max(200, 'Address must be at most 200 characters')
    .required('Please enter your address'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your password'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});
