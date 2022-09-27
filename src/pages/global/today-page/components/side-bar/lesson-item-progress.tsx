import React from 'react';
import {
  Box, styled, Card, Typography,
} from '@mui/material';
import { Circle, PanoramaFishEye } from '@mui/icons-material';

const Icons = styled(Box)({
  color: 'lightblue',
});

const LessonItemProgress = () => (
  <Card sx={{ margin: 2, padding: 1 }}>
    <Typography sx={{ borderBottom: '1px solid lightgray' }}>Lesson title</Typography>

    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
      <Typography>date</Typography>
      <Icons>
        <Circle />
        <Circle />
        <Circle />
        <PanoramaFishEye />
        <PanoramaFishEye />
      </Icons>
    </Box>

  </Card>
);

export default LessonItemProgress;
