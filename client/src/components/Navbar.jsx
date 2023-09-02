import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const buttonStyle = {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    color: 'black',
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f0f0f0' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ color: 'black' }}>
          LibraTech
        </Typography>
        <div>
          <Button color="inherit" sx={buttonStyle}>
            <Link to="/home">Home</Link>
          </Button>
          <Button color="inherit" sx={buttonStyle}>
            About
          </Button>
          <Button color="inherit" sx={buttonStyle}>
            <Link to="/books">Books</Link>
          </Button>
          <Button color="inherit" sx={buttonStyle}>
            <Link to="/login">Log In</Link>
          </Button>
          <Button color="inherit" sx={buttonStyle}>
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
