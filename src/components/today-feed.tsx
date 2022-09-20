import React from 'react';
import { Box } from '@mui/material';
import LessonItem from './lesson-item';

const TodayFeed = () => (
  <Box flex={4} p={2}>
    <LessonItem />
    <LessonItem />
    <LessonItem />

  </Box>
);

export default TodayFeed;
