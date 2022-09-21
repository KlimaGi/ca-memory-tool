import React from 'react';
import {
  Card, Box, Button, Typography,
} from '@mui/material';
import { Edit, Done } from '@mui/icons-material';

const LessonItem = () => (
  <Card sx={{ bgcolor: 'lightgray', margin: 2, p: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h5" component="h2" gutterBottom>Title</Typography>
      <Button variant="contained" endIcon={<Edit />} sx={{ bgcolor: 'gray' }}>Edit</Button>
    </Box>

    <Typography variant="body1" gutterBottom>Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex voluptatibus ullam minus adipisci accusamus!</Typography>

    <Button variant="contained" startIcon={<Done />} sx={{ bgcolor: 'lightblue', display: 'flex', justifyContent: 'end' }}>Done</Button>
  </Card>
);

export default LessonItem;
