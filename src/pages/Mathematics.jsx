import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Quiz from '../components/Quiz.jsx';
import Exercise from '../components/Exercise.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const resources = [
  { label: 'NCERT eBooks (Maths)', url: 'https://ncert.nic.in/textbook.php?femh1=0-14' },
  { label: 'ePathshala (Maths)', url: 'https://epathshala.nic.in/' },
  { label: 'DIKSHA Portal (Maths)', url: 'https://diksha.gov.in/' },
  { label: 'Vedantu Young Wonders Class 5 Maths', url: 'https://www.youtube.com/playlist?list=PLVLoWQFkZbhVvQnQn6QwQnQn6QwQnQn6' },
  { label: 'Magnet Brains Class 5 Mathematics', url: 'https://www.youtube.com/playlist?list=PLVLoWQFkZbhVvQnQn6QwQnQn6QwQnQn6' },
  { label: 'Magnet Brains Class 5 Mathematics (YouTube Search)', url: 'https://www.youtube.com/results?search_query=magnet+brains+class+5+math' }
];

const quizzes = [
  // Numbers And Numeration
  {
    question: 'What is the place value of 5 in 5,432?',
    options: ['5', '50', '500', '5,000'],
    answer: '5,000',
    explanation: '5 is in the thousands place, so its value is 5,000.'
  },
  // Roman Numerals
  {
    question: 'What is the value of the Roman numeral X?',
    options: ['5', '10', '50', '100'],
    answer: '10',
    explanation: 'X stands for 10 in Roman numerals.'
  },
  // Addition And Subtraction
  {
    question: 'What is 234 + 456?',
    options: ['680', '690', '700', '790'],
    answer: '690',
    explanation: '234 + 456 = 690.'
  },
  // Multiplication And Division
  {
    question: 'What is 8 × 7?',
    options: ['54', '56', '64', '48'],
    answer: '56',
    explanation: '8 × 7 = 56.'
  },
  // Factors And Multiples
  {
    question: 'Which of the following is a factor of 24?',
    options: ['3', '5', '7', '11'],
    answer: '3',
    explanation: '3 × 8 = 24, so 3 is a factor.'
  },
  // Fractions
  {
    question: 'What is 1/2 of 10?',
    options: ['2', '4', '5', '8'],
    answer: '5',
    explanation: 'Half of 10 is 5.'
  },
  // Decimal Numbers
  {
    question: 'What is 0.5 as a fraction?',
    options: ['1/2', '1/3', '1/4', '2/5'],
    answer: '1/2',
    explanation: '0.5 is equal to 1/2.'
  },
  // Unitary Method
  {
    question: 'If 1 pen costs ₹5, what is the cost of 4 pens?',
    options: ['₹10', '₹15', '₹20', '₹25'],
    answer: '₹20',
    explanation: '4 × ₹5 = ₹20.'
  },
  // Money And Bills
  {
    question: 'If you buy a toy for ₹75 and give ₹100, how much change will you get?',
    options: ['₹15', '₹20', '₹25', '₹30'],
    answer: '₹25',
    explanation: '₹100 - ₹75 = ₹25.'
  }
];

const exercises = [
  // Numbers And Numeration
  {
    prompt: 'Write the number 3,205 in words.',
    answer: 'Three thousand two hundred five',
    hint: 'Break it into thousands, hundreds, tens, and ones.'
  },
  // Roman Numerals
  {
    prompt: 'Write the number 49 in Roman numerals.',
    answer: 'XLIX',
    hint: 'XL = 40, IX = 9.'
  },
  // Addition And Subtraction
  {
    prompt: 'Subtract 123 from 500.',
    answer: '377',
    hint: '500 - 123 = ?'
  },
  // Multiplication And Division
  {
    prompt: 'Divide 81 by 9.',
    answer: '9',
    hint: '81 ÷ 9 = ?'
  },
  // Factors And Multiples
  {
    prompt: 'List all factors of 12.',
    answer: '1, 2, 3, 4, 6, 12',
    hint: 'Start from 1 up to 12.'
  },
  // Fractions
  {
    prompt: 'What is 1/4 of 20?',
    answer: '5',
    hint: 'Divide 20 by 4.'
  },
  // Decimal Numbers
  {
    prompt: 'Write 0.75 as a fraction.',
    answer: '3/4',
    hint: '75/100 simplified.'
  },
  // Unitary Method
  {
    prompt: 'If 6 apples cost ₹30, what is the cost of 1 apple?',
    answer: '₹5',
    hint: 'Divide total cost by number of apples.'
  },
  // Money And Bills
  {
    prompt: 'If you have ₹50 and spend ₹35, how much is left?',
    answer: '₹15',
    hint: 'Subtract.'
  }
];

const Mathematics = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom>{t('mathematics')} {t('syllabus')}</Typography>
      <ProgressBar subject="Mathematics" />
      <List>
        {t('mathematicsTopics', { returnObjects: true }).map((topic, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={topic} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('resources')}</Typography>
      <List>
        {resources.map((res, idx) => (
          <ListItem key={idx}>
            <Link href={res.url} target="_blank" rel="noopener" underline="hover">{res.label}</Link>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('quiz')}</Typography>
      <Quiz questions={quizzes} subject="Mathematics" topic="All" />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('exercises')}</Typography>
      <Exercise questions={exercises} />
    </Box>
  );
};

export default Mathematics;
