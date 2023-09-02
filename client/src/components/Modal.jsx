import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Tabs,
  Tab,
} from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useFormik } from 'formik';
import { SignupSchema } from '../schema/SignupSchema';
import { LoginSchema } from '../schema/LoginSchema';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    width: '500px',
  },
  errorText: {
    color: 'red',
  },
}));

const initialSignupData = {
  fullName: '',
  email: '',
  phoneno: '',
  college: '',
  address: '',
  password: '',
  confirmPassword: '',
};

const initialLoginData = {
  email: '',
  password: '',
};

const SignupLoginModal = ({ isOpen, onClose, isLoginView }) => {
  const classes = useStyles();
  const [LoginView, setIsLoginView] = useState(isLoginView);
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: LoginView ? initialLoginData : initialSignupData,
    validationSchema: LoginView ? LoginSchema : SignupSchema,
    onSubmit: async (values) => {
      if (LoginView) {
        const response = await fetch('http://127.0.0.1:8000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.ok) {
          console.log('Login successful', data);
          navigate("/home")
        } else {
          console.error('Login failed', data);
        }
      } else {
        const response = await fetch('http://127.0.0.1:8000/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.ok) {
          navigate("/login")
          resetForm({
            values: LoginView ? initialLoginData : initialSignupData,
          });
        } else {
          console.error('Signup failed', data);
        }
      }
  },
  });

  const switchView = () => {
    setIsLoginView(!LoginView);
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Tabs
        value={LoginView ? 0 : 1}
        indicatorColor="primary"
        textColor="primary"
        onChange={switchView}
        centered
      >
        <Tab label="Log In" />
        <Tab label="Sign Up" />
      </Tabs>
      <form onSubmit={handleSubmit}>
        <DialogContent className={classes.dialogContent}>
          {!LoginView && (
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              margin="normal"
              variant="outlined"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {errors.fullName && touched.fullName ? (
            <p className={classes.errorText}>{errors.fullName}</p>
          ) : null}
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className={classes.errorText}>{errors.email}</p>
          ) : null}
          {!LoginView && (
            <TextField
              label="Phone No."
              name="phoneno"
              fullWidth
              margin="normal"
              variant="outlined"
              value={values.phoneno}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {errors.phoneno && touched.phoneno ? (
            <p className={classes.errorText}>{errors.phoneno}</p>
          ) : null}
          {!LoginView && (
            <TextField
              label="College"
              name="college"
              fullWidth
              margin="normal"
              variant="outlined"
              value={values.college}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {errors.college && touched.college ? (
            <p className={classes.errorText}>{errors.college}</p>
          ) : null}
          {!LoginView && (
            <TextField
              label="Address"
              name="address"
              fullWidth
              margin="normal"
              variant="outlined"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {errors.address && touched.address ? (
            <p className={classes.errorText}>{errors.address}</p>
          ) : null}
          <TextField
            label="Password"
            name="password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className={classes.errorText}>{errors.password}</p>
          ) : null}
          {!LoginView && (
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              fullWidth
              margin="normal"
              variant="outlined"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className={classes.errorText}>{errors.confirmPassword}</p>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            {LoginView ? 'Log In' : 'Sign Up'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SignupLoginModal;
