import React from 'react';
import { Card, Button, Typography } from '@mui/material';

const LessonItem = () => (
  <Card sx={{ bgcolor: 'lightgray', margin: 2 }}>
    <Button>Edit</Button>
    <Typography>Title</Typography>
    <Typography>Content</Typography>

    <Button>Done</Button>
  </Card>
);

export default LessonItem;
