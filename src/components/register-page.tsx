import React, { useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import {
  Person, Mail, Visibility, VisibilityOff,
} from '@mui/icons-material';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('siunciami duomenys i serveri per globalios busenos valdymo iranki');
    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundImage: 'url(/assets/image-bg.png)',
        backgroundSize: 'cover',
      }}
    >
      <Paper
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}
        elevation={10}
        onSubmit={handleSubmit}
      >
        <Typography component="h1" variant="h4" align="center">Register</Typography>
        <TextField
          label="Name"
          variant="filled"
          color="secondary"
          InputProps={{
            endAdornment: <InputAdornment position="end"><Person /></InputAdornment>,
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name}
          helperText={name ? 'Required' : 'Please, enter your name'}
          required
        />
        <TextField
          variant="filled"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Mail />
              </InputAdornment>
            ),
          }}
          helperText="Please, enter your email"
          required
        />
        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Visibility />
                <VisibilityOff />
              </InputAdornment>
            ),
          }}
          helperText="The password should have more than 7 symbols"
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ height: 60 }}
          size="large"
        >
          Sign In
        </Button>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
