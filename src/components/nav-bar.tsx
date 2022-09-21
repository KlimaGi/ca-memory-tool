import React from 'react';
import {
  AppBar, Box, Typography, styled, Toolbar, IconButton, Stack, Button,
} from '@mui/material';
import { AddCircleRounded, AccountCircle } from '@mui/icons-material';
import logo from '../assets/logo-white-sm.png';
import ThemeSwitch from './theme-switch';

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
        <IconButton size="small" edge="start" aria-label="logo">
          <img src={logo} alt="logo" />
        </IconButton>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '1rem', flexGrow: 1 }}>Memory tool</Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <ThemeSwitch />
        <Button color="inherit">About</Button>
        <Button color="inherit">Time line</Button>

        <IconButton aria-label="create" sx={{ color: 'white' }}>
          <AddCircleRounded />
        </IconButton>

        <IconButton aria-label="profile" sx={{ color: 'white' }}>
          <AccountCircle />
        </IconButton>
      </Stack>

    </StyleToolBar>

  </AppBar>
);

export default NavBar;
