import React from 'react';
import { Box } from '@mui/material';
import LessonItem from './lesson-item';
import NavBar from './nav-bar';

const TodayFeed = () => (
  <>
    <NavBar />
    <Box flex={4} p={2}>
      <LessonItem />
      <LessonItem />
      <LessonItem />

    </Box>
  </>

);

export default TodayFeed;
