import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useProgress } from './ProgressContext.jsx';

const ProgressBar = ({ subject }) => {
  const { progress } = useProgress();
  const subjectProgress = progress[subject] || {};
  const total = Object.keys(subjectProgress).length || 1;
  const score = Object.values(subjectProgress).reduce((a, b) => a + (b || 0), 0);
  const percent = Math.round((score / (total * 10)) * 100); // assuming 10 is max score per topic

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="subtitle1">Progress in {subject}:</Typography>
      <LinearProgress variant="determinate" value={percent} sx={{ height: 10, borderRadius: 5 }} />
      <Typography variant="caption">{percent}% complete</Typography>
    </Box>
  );
};

export default ProgressBar;
