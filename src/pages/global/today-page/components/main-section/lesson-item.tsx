import React from 'react';
import {
  Paper, Box, Button, Typography,
} from '@mui/material';
import { Edit, Done } from '@mui/icons-material';

const LessonItem = () => (
  <Paper sx={{ bgcolor: 'grey.A200', margin: 2, p: 4 }} elevation={4}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={(theme) => ({ color: theme.palette.myColor.main })}>Title</Typography>
      <Button variant="contained" endIcon={<Edit />} sx={{ bgcolor: 'grey.500' }}>Edit</Button>
    </Box>

    <Typography variant="body1" gutterBottom>Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex voluptatibus ullam minus adipisci accusamus!</Typography>

    <Button variant="contained" startIcon={<Done />} sx={{ bgcolor: 'lightblue' }}>Done</Button>
  </Paper>
);

export default LessonItem;
