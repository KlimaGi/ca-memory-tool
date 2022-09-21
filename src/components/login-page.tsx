import React, { useState } from 'react';
import {
  Card, Stack, TextField, InputAdornment,
} from '@mui/material';
import {
  Person, Mail, Visibility, VisibilityOff,
} from '@mui/icons-material';

const Login = () => {
  // todo: validation with formik
  //  add background image
  // fix formatting
  const [value, setValue] = useState('');

  return (
    <Card sx={{ width: '60%', padding: 5 }}>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Name"
          variant="filled"
          color="secondary"
          InputProps={{
            endAdornment: <InputAdornment position="end"><Person /></InputAdornment>,
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={value ? 'Required' : 'Please, enter your name'}
          required
        />
        <TextField
          label="Email"
          variant="filled"
          color="secondary"
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
          label="Password"
          variant="filled"
          color="secondary"
          type="password"
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
      </Stack>
    </Card>

  );
};

export default Login;
