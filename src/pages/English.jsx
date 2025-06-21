import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Quiz from '../components/Quiz.jsx';
import Exercise from '../components/Exercise.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const resources = [
  { label: 'NCERT eBooks (English)', url: 'https://ncert.nic.in/textbook.php?fess1=0-14' },
  { label: 'ePathshala (English)', url: 'https://epathshala.nic.in/' },
  { label: 'DIKSHA Portal (English)', url: 'https://diksha.gov.in/' },
  { label: 'Magnet Brains Class 5 English Playlist', url: 'https://www.youtube.com/playlist?list=PLVLoWQFkZbhVvQnQn6QwQnQn6QwQnQn6' },
  { label: 'Magnet Brains Class 5 English (YouTube Search)', url: 'https://www.youtube.com/results?search_query=magnet+brains+class+5+english' }
];

const quizzes = [
  // One Friday Morning
  {
    question: 'Who is the main character in "One Friday Morning"?',
    options: ['Nancy Lee', 'Mary Kom', 'Amit', 'Ravi'],
    answer: 'Nancy Lee',
    explanation: 'Nancy Lee is the main character in "One Friday Morning".'
  },
  {
    question: 'What did Nancy Lee win in the story?',
    options: ['A painting contest', 'A spelling bee', 'A sports event', 'A science fair'],
    answer: 'A painting contest',
    explanation: 'She won a painting contest but faced discrimination.'
  },
  // Smile (Poem)
  {
    question: 'What does the poem "Smile" encourage us to do?',
    options: ['Be angry', 'Smile at others', 'Cry', 'Shout'],
    answer: 'Smile at others',
    explanation: 'The poem encourages us to smile and spread happiness.'
  },
  // My Brother, My Brother
  {
    question: 'What is the main theme of "My Brother, My Brother"?',
    options: ['Sibling rivalry', 'Helping others', 'Traveling', 'Cooking'],
    answer: 'Helping others',
    explanation: 'The story is about helping and caring for others.'
  },
  // The Brave Little Kite (Poem)
  {
    question: 'What lesson does "The Brave Little Kite" teach?',
    options: ['Be afraid', 'Try new things', 'Stay still', 'Hide'],
    answer: 'Try new things',
    explanation: 'The poem teaches us to be brave and try new things.'
  },
  // Who Will Be Ningthou
  {
    question: 'Who was chosen to be the next Ningthou (king)?',
    options: ['Sanatombi', 'Sanajaoba', 'Sanayaima', 'Sanatomba'],
    answer: 'Sanatombi',
    explanation: 'Sanatombi was chosen for her kindness and wisdom.'
  },
  // The Wonderful World (Poem)
  {
    question: 'What does the poem "The Wonderful World" describe?',
    options: ['Nature and its beauty', 'A city', 'A school', 'A car'],
    answer: 'Nature and its beauty',
    explanation: 'The poem describes the beauty of the world around us.'
  },
  // Down The Volcano
  {
    question: 'What is a volcano?',
    options: ['A mountain that erupts', 'A river', 'A forest', 'A desert'],
    answer: 'A mountain that erupts',
    explanation: 'A volcano is a mountain that can erupt with lava.'
  },
  // Downhill On A Bicycle (Poem)
  {
    question: 'What is the feeling described in "Downhill On A Bicycle"?',
    options: ['Excitement and joy', 'Fear', 'Sadness', 'Anger'],
    answer: 'Excitement and joy',
    explanation: 'The poem describes the joy of riding downhill on a bicycle.'
  },
  // Listening Text
  {
    question: 'Why is listening important in communication?',
    options: ['To understand others', 'To ignore others', 'To talk more', 'To argue'],
    answer: 'To understand others',
    explanation: 'Listening helps us understand and learn from others.'
  }
];

const exercises = [
  // One Friday Morning
  {
    prompt: 'Describe the main challenge faced by Nancy Lee in "One Friday Morning".',
    answer: '',
    hint: 'Think about the contest and what happened after she won.'
  },
  // Smile (Poem)
  {
    prompt: 'Write two lines from the poem "Smile" that you liked the most.',
    answer: '',
    hint: 'Pick your favorite lines.'
  },
  // My Brother, My Brother
  {
    prompt: 'How did the brothers help each other in the story?',
    answer: '',
    hint: 'Think about their actions.'
  },
  // The Brave Little Kite (Poem)
  {
    prompt: 'What did the little kite do to become brave?',
    answer: '',
    hint: 'Describe the kite’s actions.'
  },
  // Who Will Be Ningthou
  {
    prompt: 'Why was Sanatombi chosen as the next Ningthou?',
    answer: '',
    hint: 'Think about her qualities.'
  },
  // The Wonderful World (Poem)
  {
    prompt: 'List three things the poet finds wonderful in the world.',
    answer: '',
    hint: 'Look for things in nature.'
  },
  // Down The Volcano
  {
    prompt: 'Explain what happens during a volcanic eruption.',
    answer: '',
    hint: 'Describe the process.'
  },
  // Downhill On A Bicycle (Poem)
  {
    prompt: 'How does the poet feel while riding downhill?',
    answer: '',
    hint: 'Describe the emotions.'
  },
  // Listening Text
  {
    prompt: 'Write a short paragraph on why listening is important.',
    answer: '',
    hint: 'Think about communication.'
  }
];

const English = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 2 }}>
      <ProgressBar subject="English" />
      <Typography variant="h4" color="primary" gutterBottom>{t('english')} {t('syllabus')}</Typography>
      <List>
        {t('englishTopics', { returnObjects: true }).map((topic, idx) => (
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
      <Quiz questions={quizzes} subject="English" topic="All" />
      <Divider sx={{ my: 2 }} />
      <Typography variant="h5" color="secondary" gutterBottom>{t('exercises')}</Typography>
      <Exercise questions={exercises} />
    </Box>
  );
};

export default English;
