import React from 'react';
import {
  Paper, Typography, Stack, Button,
} from '@mui/material';

type AuthFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  title: string,
  submitText: string,
  children: React.ReactNode
};

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit, title, submitText, children,
}) => (
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
    onSubmit={onSubmit}
  >
    <Stack direction="column" spacing={2}>
      <Typography component="h1" variant="h4" align="center">{title}</Typography>
      {children}
      <Button
        type="submit"
        variant="contained"
        sx={{ height: 60 }}
        size="medium"
      >
        {submitText}
      </Button>
    </Stack>
  </Paper>
);

export default AuthForm;
