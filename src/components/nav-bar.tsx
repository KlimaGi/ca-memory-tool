import React from 'react';
import { AppBar, Box } from '@mui/material';
import logo from '../images/logo-white.png';

const NavBar = () => (
  <AppBar>
    <Box sx={{
      padding: '1rem',
    }}
    >
      <img src={logo} alt="logo" />
    </Box>
  </AppBar>
);

export default NavBar;
