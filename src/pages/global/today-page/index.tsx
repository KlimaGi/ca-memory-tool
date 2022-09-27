import React from 'react';
import { Stack } from '@mui/material';
import TodayFeed from './components/main-section';
import TimeLine from './components/side-bar';

const TodayPage: React.FC = () => (

  <Stack direction="row" spacing={2} justifyContent="space-between">
    <TodayFeed />
    <TimeLine />
  </Stack>
);

export default TodayPage;
