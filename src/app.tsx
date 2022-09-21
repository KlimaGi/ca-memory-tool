import React from 'react';
import { Stack } from '@mui/material';
import NavBar from './components/nav-bar';
import TodayFeed from './components/today-feed';
import TimeLine from './components/time-line';

const App: React.FC = () => (
  <>
    <NavBar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <TodayFeed />
      <TimeLine />
    </Stack>
  </>

);

export default App;
