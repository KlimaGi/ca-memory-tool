import React from 'react';
import { Link } from 'react-router-dom';

import {
  Box, Paper, Typography,
} from '@mui/material';

const NotFoundPage: React.FC = () => (
  <Box>
    <Paper>
      <Typography>Page not found</Typography>
      <Link to="/">Go Home</Link>
    </Paper>
  </Box>
);

export default NotFoundPage;
