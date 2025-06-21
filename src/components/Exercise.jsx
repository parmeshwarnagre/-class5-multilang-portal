import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

/**
 * Exercise component for short answer/assignment questions
 * @param {Object} props
 * @param {Array} props.questions - Array of { prompt, answer, hint }
 */
const Exercise = ({ questions }) => {
  const [responses, setResponses] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (idx, value) => {
    const newResponses = [...responses];
    newResponses[idx] = value;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (q.answer && responses[idx].trim().toLowerCase() === q.answer.trim().toLowerCase()) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6">Exercises</Typography>
      {questions.map((q, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Typography>{idx + 1}. {q.prompt}</Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={responses[idx]}
            onChange={e => handleChange(idx, e.target.value)}
            disabled={submitted}
            sx={{ mt: 1 }}
          />
          {submitted && q.answer && (
            <Alert severity={responses[idx].trim().toLowerCase() === q.answer.trim().toLowerCase() ? 'success' : 'error'} sx={{ mt: 1 }}>
              {responses[idx].trim().toLowerCase() === q.answer.trim().toLowerCase() ? 'Correct!' : `Answer: ${q.answer}`}
              {q.hint && <span> | Hint: {q.hint}</span>}
            </Alert>
          )}
        </Box>
      ))}
      {!submitted && (
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
          Submit Answers
        </Button>
      )}
      {submitted && (
        <Alert sx={{ mt: 2 }} severity="info">You got {score} out of {questions.length} correct.</Alert>
      )}
    </Box>
  );
};

export default Exercise;
