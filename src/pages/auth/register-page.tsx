import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import {
  Person, Mail, Visibility, VisibilityOff,
} from '@mui/icons-material';
import AuthForm from './components/auth-form';

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
    <AuthForm title="Registration" submitText="Register" onSubmit={handleSubmit}>
      <TextField
        variant="filled"
        color="secondary"
        InputProps={{
          endAdornment: <InputAdornment position="end"><Person /></InputAdornment>,
        }}
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!name}
        helperText={name ? 'Required' : 'Please, enter your name'}
        required
      />
      <TextField
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Mail />
            </InputAdornment>
          ),
        }}
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText="Please, enter your email"
        required
      />
      <TextField
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Visibility />
              <VisibilityOff />
            </InputAdornment>
          ),
        }}
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        helperText="The password should have more than 7 symbols"
        required
      />

    </AuthForm>
  );
};

export default RegisterPage;
