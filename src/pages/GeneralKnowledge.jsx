import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Quiz from '../components/Quiz.jsx';
import Exercise from '../components/Exercise.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const resources = [
  { label: "BYJU'S General Knowledge", url: 'https://www.youtube.com/playlist?list=PLVLoWQFkZbhVvQnQn6QwQnQn6QwQnQn6' },
  { label: 'Magnet Brains Class 5 General Knowledge (YouTube Search)', url: 'https://www.youtube.com/results?search_query=class+5+general+knowledge+magnet+brains' }
];

const quizzes = [
  // Good Health Formula
  {
    question: 'Which vitamin do we get from sunlight?',
    options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
    answer: 'Vitamin D',
    explanation: 'Sunlight helps our body make Vitamin D.'
  },
  // Emergency Care
  {
    question: 'What number do you call for an ambulance in India?',
    options: ['100', '101', '102', '108'],
    answer: '102',
    explanation: '102 is the emergency ambulance number in India.'
  },
  // I Love My India
  {
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
    answer: 'Delhi',
    explanation: 'New Delhi is the capital of India.'
  },
  // Cricketology
  {
    question: 'How many players are there in a cricket team?',
    options: ['9', '10', '11', '12'],
    answer: '11',
    explanation: 'A cricket team has 11 players.'
  },
  // Helpful Robots At Home
  {
    question: 'Which robot helps clean the floor?',
    options: ['Roomba', 'Alexa', 'Siri', 'Google Home'],
    answer: 'Roomba',
    explanation: 'Roomba is a robot vacuum cleaner.'
  },
  // Natural Wonders
  {
    question: 'Which is the highest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'],
    answer: 'Mount Everest',
    explanation: 'Mount Everest is the highest mountain.'
  }
];

const exercises = [
  // Good Health Formula
  {
    prompt: 'List two things you do to stay healthy.',
    answer: '',
    hint: 'Think about food and exercise.'
  },
  // Emergency Care
  {
    prompt: 'What should you do if you see someone injured?',
    answer: '',
    hint: 'Call for help and stay calm.'
  },
  // I Love My India
  {
    prompt: 'Name two national symbols of India.',
    answer: '',
    hint: 'Flag, animal, bird, etc.'
  },
  // Cricketology
  {
    prompt: 'Who is your favorite cricketer and why?',
    answer: '',
    hint: 'Write a few lines.'
  },
  // Helpful Robots At Home
  {
    prompt: 'Name one robot you would like to have at home and what it should do.',
    answer: '',
    hint: 'Be creative!'
  },
  // Natural Wonders
  {
    prompt: 'Describe a natural wonder you would like to visit.',
    answer: '',
    hint: 'Mountains, waterfalls, etc.'
  }
];

const GeneralKnowledge = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom>{t('generalKnowledge')} {t('syllabus')}</Typography>
      <ProgressBar subject="General Knowledge" />
      <List>
        {t('generalKnowledgeTopics', { returnObjects: true }).map((topic, idx) => (
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
      <Quiz questions={quizzes} subject="General Knowledge" topic="All" />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('exercises')}</Typography>
      <Exercise questions={exercises} />
    </Box>
  );
};

export default GeneralKnowledge;
