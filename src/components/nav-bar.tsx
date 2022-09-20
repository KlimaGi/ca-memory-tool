import React from 'react';
import {
  AppBar, Box, Typography, styled, Toolbar,
} from '@mui/material';
import { AddCircleRounded, AccountCircle } from '@mui/icons-material';
import logo from '../assets/logo-white-sm.png';

const StyleToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavBar = () => (
  <AppBar position="sticky">
    <StyleToolBar>
      <Box sx={{
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
      }}
      >
        <img src={logo} alt="logo" />
        <Typography sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '1rem' }}>Memory tool</Typography>
      </Box>

      <Typography>About</Typography>
      <Typography>Time line</Typography>

      <AddCircleRounded />

      <AccountCircle />

    </StyleToolBar>

  </AppBar>
);

export default NavBar;
