import React from 'react';
import {
  AppBar, Box, Typography, styled, Toolbar, IconButton,
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
        <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '1rem' }}>Memory tool</Typography>
      </Box>

      <Typography variant="h6">About</Typography>
      <Typography variant="h6">Time line</Typography>

      <IconButton aria-label="create" sx={{ color: 'white' }}>
        <AddCircleRounded />
      </IconButton>

      <IconButton aria-label="profile" sx={{ color: 'white' }}>
        <AccountCircle />
      </IconButton>

    </StyleToolBar>

  </AppBar>
);

export default NavBar;
