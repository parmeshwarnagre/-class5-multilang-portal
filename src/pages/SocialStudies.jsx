import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Quiz from '../components/Quiz.jsx';
import Exercise from '../components/Exercise.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const resources = [
  { label: 'NCERT eBooks (EVS/SST)', url: 'https://ncert.nic.in/textbook.php?feev1=0-14' },
  { label: 'ePathshala (SST)', url: 'https://epathshala.nic.in/' },
  { label: 'DIKSHA Portal (SST)', url: 'https://diksha.gov.in/' },
  { label: 'Learn with Fun Class 5 SST', url: 'https://www.youtube.com/playlist?list=PLVLoWQFkZbhVvQnQn6QwQnQn6QwQnQn6' },
  { label: 'Magnet Brains Class 5 Social Studies (YouTube Search)', url: 'https://www.youtube.com/results?search_query=magnet+brains+class+5+social+studies' }
];

const quizzes = [
  // Movements Of The Earth-Their Effects
  {
    question: 'What causes seasons on Earth?',
    options: ['Earth’s rotation', 'Earth’s revolution', 'Moon’s revolution', 'Sun’s movement'],
    answer: 'Earth’s revolution',
    explanation: 'Seasons are caused by the revolution of the Earth around the Sun.'
  },
  // Weather And Climate
  {
    question: 'What is the difference between weather and climate?',
    options: ['Weather is short-term, climate is long-term', 'Both are the same', 'Climate is daily, weather is yearly', 'Weather is only about rain'],
    answer: 'Weather is short-term, climate is long-term',
    explanation: 'Weather changes daily, climate is the average over years.'
  },
  // Evolution Of Transport And Communication
  {
    question: 'Which was the earliest means of transport?',
    options: ['Aeroplane', 'Bullock cart', 'Train', 'Car'],
    answer: 'Bullock cart',
    explanation: 'Bullock carts were among the earliest means of transport.'
  },
  // Struggle Towards Freedom
  {
    question: 'Who is known as the Father of the Nation in India?',
    options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Dr. Ambedkar'],
    answer: 'Mahatma Gandhi',
    explanation: 'Mahatma Gandhi led India’s freedom struggle.'
  },
  // India Wins Freedom
  {
    question: 'In which year did India become independent?',
    options: ['1942', '1947', '1950', '1962'],
    answer: '1947',
    explanation: 'India became independent in 1947.'
  },
  // Climatic Zones
  {
    question: 'Which zone is the hottest?',
    options: ['Torrid zone', 'Temperate zone', 'Frigid zone', 'Cold zone'],
    answer: 'Torrid zone',
    explanation: 'The torrid zone is the hottest.'
  },
  // Elections
  {
    question: 'Who can vote in Indian elections?',
    options: ['Children', 'Citizens above 18', 'Foreigners', 'Tourists'],
    answer: 'Citizens above 18',
    explanation: 'All Indian citizens above 18 can vote.'
  },
  // The United Nations
  {
    question: 'What is the main aim of the United Nations?',
    options: ['To make war', 'To keep peace', 'To build roads', 'To teach'],
    answer: 'To keep peace',
    explanation: 'The UN works for world peace.'
  },
  // Be Clean! Be Healthy!
  {
    question: 'Why is cleanliness important?',
    options: ['For good health', 'For fun', 'For decoration', 'For fashion'],
    answer: 'For good health',
    explanation: 'Cleanliness keeps us healthy.'
  }
];

const exercises = [
  // Movements Of The Earth-Their Effects
  {
    prompt: 'Explain how day and night occur.',
    answer: '',
    hint: 'Think about Earth’s rotation.'
  },
  // Weather And Climate
  {
    prompt: 'Describe the climate of your city.',
    answer: '',
    hint: 'Is it hot, cold, rainy, etc.?' 
  },
  // Evolution Of Transport And Communication
  {
    prompt: 'Name two modern means of communication.',
    answer: '',
    hint: 'Think about phones, internet.'
  },
  // Struggle Towards Freedom
  {
    prompt: 'Name one leader from India’s freedom struggle.',
    answer: '',
    hint: 'Gandhi, Nehru, Bose, etc.'
  },
  // India Wins Freedom
  {
    prompt: 'Write a few lines about India’s Independence Day.',
    answer: '',
    hint: '15th August.'
  },
  // Climatic Zones
  {
    prompt: 'List the three main climatic zones of the Earth.',
    answer: '',
    hint: 'Torrid, temperate, frigid.'
  },
  // Elections
  {
    prompt: 'Why are elections important in a democracy?',
    answer: '',
    hint: 'People choose their leaders.'
  },
  // The United Nations
  {
    prompt: 'Name one agency of the United Nations.',
    answer: '',
    hint: 'WHO, UNICEF, etc.'
  },
  // Be Clean! Be Healthy!
  {
    prompt: 'List two ways to keep your surroundings clean.',
    answer: '',
    hint: 'Throw waste in bins, do not litter.'
  }
];

const SocialStudies = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 2 }}>
      <ProgressBar subject="Social Studies" />
      <Typography variant="h4" color="primary" gutterBottom>{t('socialStudies')} {t('syllabus')}</Typography>
      <List>
        {t('socialStudiesTopics', { returnObjects: true }).map((topic, idx) => (
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
      <Quiz questions={quizzes} subject="Social Studies" topic="All" />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('exercises')}</Typography>
      <Exercise questions={exercises} />
    </Box>
  );
};

export default SocialStudies;
