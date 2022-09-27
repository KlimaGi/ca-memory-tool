import React from 'react';
import { Box } from '@mui/material';
import LessonItemProgress from './lesson-item-progress';

const TimeLine = () => (
  <Box flex={2} sx={{ bgcolor: 'lightblue', display: { xs: 'none', sm: 'block' } }}>
    <LessonItemProgress />
    <LessonItemProgress />
    <LessonItemProgress />
  </Box>
);

export default TimeLine;
