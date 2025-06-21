import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Quiz from '../components/Quiz.jsx';
import Exercise from '../components/Exercise.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const resources = [
  { label: 'NCERT eBooks (Science)', url: 'https://ncert.nic.in/textbook.php?feep1=0-14' },
  { label: 'ePathshala (Science)', url: 'https://epathshala.nic.in/' },
  { label: 'DIKSHA Portal (Science)', url: 'https://diksha.gov.in/' },
  { label: 'Magnet Brains Class 5 Science', url: 'https://www.youtube.com/playlist?list=PLVLoWQFkZbhVvQnQn6QwQnQn6QwQnQn6' },
  { label: 'Magnet Brains Class 5 Science (YouTube Search)', url: 'https://www.youtube.com/results?search_query=magnet+brains+class+5+science' }
];

const quizzes = [
  // Food And Health
  {
    question: 'Which nutrient gives us energy?',
    options: ['Proteins', 'Carbohydrates', 'Vitamins', 'Minerals'],
    answer: 'Carbohydrates',
    explanation: 'Carbohydrates are the main source of energy.'
  },
  // Growing Plants
  {
    question: 'What do plants need to make food?',
    options: ['Sunlight, water, air', 'Milk, oil, salt', 'Sand, stones, glass', 'Plastic, metal, wood'],
    answer: 'Sunlight, water, air',
    explanation: 'Plants need sunlight, water, and air for photosynthesis.'
  },
  // Skeletal System And Nervous System
  {
    question: 'Which organ controls our body?',
    options: ['Heart', 'Brain', 'Lungs', 'Liver'],
    answer: 'Brain',
    explanation: 'The brain controls all body activities.'
  },
  // Safety And First Aid
  {
    question: 'What should you do if you get a small cut?',
    options: ['Wash and cover it', 'Ignore it', 'Scratch it', 'Hide it'],
    answer: 'Wash and cover it',
    explanation: 'Wash the cut and cover it with a clean bandage.'
  },
  // Air And Water
  {
    question: 'Which process purifies water naturally?',
    options: ['Boiling', 'Filtration', 'Evaporation and condensation', 'Freezing'],
    answer: 'Evaporation and condensation',
    explanation: 'This is the natural water cycle.'
  },
  // Soil Erosion And Conservation
  {
    question: 'What helps prevent soil erosion?',
    options: ['Cutting trees', 'Planting trees', 'Building roads', 'Burning waste'],
    answer: 'Planting trees',
    explanation: 'Roots of trees hold the soil and prevent erosion.'
  },
  // Care For Environment
  {
    question: 'Which of these is good for the environment?',
    options: ['Planting trees', 'Throwing plastic', 'Burning leaves', 'Wasting water'],
    answer: 'Planting trees',
    explanation: 'Planting trees helps the environment.'
  },
  // Projects/Activities
  {
    question: 'Which activity helps you learn about plants?',
    options: ['Growing a plant', 'Watching TV', 'Playing video games', 'Sleeping'],
    answer: 'Growing a plant',
    explanation: 'Growing a plant is a hands-on activity.'
  }
];

const exercises = [
  // Food And Health
  {
    prompt: 'List three healthy foods you eat every day.',
    answer: '',
    hint: 'Think about fruits, vegetables, grains.'
  },
  // Growing Plants
  {
    prompt: 'Describe how you would grow a plant at home.',
    answer: '',
    hint: 'Mention soil, water, sunlight.'
  },
  // Skeletal System And Nervous System
  {
    prompt: 'Name two functions of the skeleton.',
    answer: '',
    hint: 'Support and protection.'
  },
  // Safety And First Aid
  {
    prompt: 'What should you do if someone faints?',
    answer: '',
    hint: 'Lay them down and call for help.'
  },
  // Air And Water
  {
    prompt: 'How can you save water at home?',
    answer: '',
    hint: 'List two ways.'
  },
  // Soil Erosion And Conservation
  {
    prompt: 'Explain why soil conservation is important.',
    answer: '',
    hint: 'Think about plants and food.'
  },
  // Care For Environment
  {
    prompt: 'List two things you can do to care for the environment.',
    answer: '',
    hint: 'Reduce, reuse, recycle.'
  },
  // Projects/Activities
  {
    prompt: 'Describe a science project you would like to do.',
    answer: '',
    hint: 'Be creative!'
  }
];

const Science = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 2 }}>
      <ProgressBar subject="Science" />
      <Typography variant="h4" color="primary" gutterBottom>{t('science')} {t('syllabus')}</Typography>
      <List>
        {t('scienceTopics', { returnObjects: true }).map((topic, idx) => (
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
      <Quiz questions={quizzes} subject="Science" topic="All" />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('exercises')}</Typography>
      <Exercise questions={exercises} />
    </Box>
  );
};

export default Science;
