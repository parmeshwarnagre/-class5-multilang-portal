import React, { useState } from 'react';
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Alert } from '@mui/material';
import { useProgress } from './ProgressContext.jsx';

/**
 * Quiz component for interactive MCQs
 * @param {Object} props
 * @param {Array} props.questions - Array of { question, options, answer, explanation }
 */
const Quiz = ({ questions, subject = '', topic = '' }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [randomized, setRandomized] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  const { updateProgress } = useProgress ? useProgress() : { updateProgress: () => {} };

  React.useEffect(() => {
    setShuffledQuestions(questions);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelected('');
    setRandomized(false);
  }, [questions]);

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const handleChange = (e) => setSelected(e.target.value);

  const handleSubmit = () => {
    if (selected === shuffledQuestions[current].answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
    setShowResult(current === shuffledQuestions.length - 1);
    if (current === shuffledQuestions.length - 1 && subject && topic && updateProgress) {
      updateProgress(subject, topic, score + (selected === shuffledQuestions[current].answer ? 1 : 0));
    }
  };

  const handleNext = () => {
    setCurrent(current + 1);
    setSelected('');
    setShowExplanation(false);
  };

  const handleRandomize = () => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelected('');
    setRandomized(true);
  };

  if (!shuffledQuestions || shuffledQuestions.length === 0) return <Typography>No quiz available.</Typography>;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6">Question {current + 1} of {shuffledQuestions.length}</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">{shuffledQuestions[current].question}</FormLabel>
        <RadioGroup value={selected} onChange={handleChange}>
          {shuffledQuestions[current].options.map((opt, idx) => (
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
          {selected === shuffledQuestions[current].answer ? (
            <Alert severity="success">Correct!</Alert>
          ) : (
            <Alert severity="error">Incorrect. Correct answer: {shuffledQuestions[current].answer}</Alert>
          )}
          {shuffledQuestions[current].explanation && (
            <Typography sx={{ mt: 1 }}>{shuffledQuestions[current].explanation}</Typography>
          )}
          {current < shuffledQuestions.length - 1 && (
            <Button variant="outlined" sx={{ mt: 2 }} onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      )}
      {showResult && (
        <Alert sx={{ mt: 3 }} severity="info">Quiz complete! Your score: {score} / {shuffledQuestions.length}</Alert>
      )}
      <Button variant="text" sx={{ mt: 2 }} onClick={handleRandomize}>
        Randomize Quiz
      </Button>
    </Box>
  );
};

export default Quiz;
