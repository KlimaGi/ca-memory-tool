import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Stack } from '@mui/material';
// import NavBar from './components/nav-bar';
import TodayFeed from './components/today-feed';
// import TimeLine from './components/time-line';
import LoginPage from './components/login-page';
import RegisterPage from './components/register-page';
import NotFoundPage from './pages/not-found-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* <NavBar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <TodayFeed />
      <TimeLine />
    </Stack> */}

      <Route path="/" element={<TodayFeed />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<NotFoundPage />} />

    </Routes>
  </BrowserRouter>

);

export default App;
