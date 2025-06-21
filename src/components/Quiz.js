import React, { useState } from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Alert } from '@mui/material';

/**
 * Quiz component for interactive MCQs
 * @param {Object} props
 * @param {Array} props.questions - Array of { question, options, answer, explanation }
 */
const Quiz = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleChange = (e) => setSelected(e.target.value);

  const handleSubmit = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
    setShowResult(current === questions.length - 1);
  };

  const handleNext = () => {
    setCurrent(current + 1);
    setSelected('');
    setShowExplanation(false);
  };

  if (!questions || questions.length === 0) return <Typography>No quiz available.</Typography>;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6">Question {current + 1} of {questions.length}</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{questions[current].question}</FormLabel>
        <RadioGroup value={selected} onChange={handleChange}>
          {questions[current].options.map((opt, idx) => (
            <FormControlLabel key={idx} value={opt} control={<Radio />} label={opt} />
          ))}
        </RadioGroup>
      </FormControl>
      {!showExplanation && (
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit} disabled={!selected}>
          Submit
        </Button>
      )}
      {showExplanation && (
        <Box sx={{ mt: 2 }}>
          {selected === questions[current].answer ? (
            <Alert severity="success">Correct!</Alert>
          ) : (
            <Alert severity="error">Incorrect. Correct answer: {questions[current].answer}</Alert>
          )}
          {questions[current].explanation && (
            <Typography sx={{ mt: 1 }}>{questions[current].explanation}</Typography>
          )}
          {current < questions.length - 1 && (
            <Button variant="outlined" sx={{ mt: 2 }} onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      )}
      {showResult && (
        <Alert sx={{ mt: 3 }} severity="info">Quiz complete! Your score: {score} / {questions.length}</Alert>
      )}
    </Box>
  );
};

export default Quiz;
