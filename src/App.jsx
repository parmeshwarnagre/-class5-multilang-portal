import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import PublicIcon from '@mui/icons-material/Public';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import English from './pages/English';
import Mathematics from './pages/Mathematics';
import Science from './pages/Science';
import SocialStudies from './pages/SocialStudies';
import GeneralKnowledge from './pages/GeneralKnowledge';
import { ProgressProvider } from './components/ProgressContext.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import class5Logo from './assets/class5-logo.svg';

// Subject Pages (to be implemented)
const Home = () => (
  <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        Welcome to Class 5 Learning Portal
      </Typography>
      <Typography variant="h6" gutterBottom>
        Explore the full CBSE/NCERT syllabus, official resources, video lessons, exercises, and assignments for every subject.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 4 }}>
        <Button component={Link} to="/english" variant="contained" color="secondary" startIcon={<MenuBookIcon />}>
          English
        </Button>
        <Button component={Link} to="/mathematics" variant="contained" color="secondary" startIcon={<CalculateIcon />}>
          Mathematics
        </Button>
        <Button component={Link} to="/science" variant="contained" color="secondary" startIcon={<ScienceIcon />}>
          Science
        </Button>
        <Button component={Link} to="/social-studies" variant="contained" color="secondary" startIcon={<PublicIcon />}>
          Social Studies
        </Button>
        <Button component={Link} to="/general-knowledge" variant="contained" color="secondary" startIcon={<EmojiObjectsIcon />}>
          General Knowledge
        </Button>
      </Box>
    </Box>
  </Container>
);

const subjects = [
  { name: 'English', path: '/english', icon: <MenuBookIcon /> },
  { name: 'Mathematics', path: '/mathematics', icon: <CalculateIcon /> },
  { name: 'Science', path: '/science', icon: <ScienceIcon /> },
  { name: 'Social Studies', path: '/social-studies', icon: <PublicIcon /> },
  { name: 'General Knowledge', path: '/general-knowledge', icon: <EmojiObjectsIcon /> },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#f0f4ff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Comic Sans MS, Comic Sans, cursive, Roboto, Arial, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: 2,
      color: '#1976d2',
      textShadow: '2px 2px 8px #ff9800',
      transition: 'color 0.3s',
    },
    h6: {
      color: '#333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 2px 8px #1976d233',
          transition: 'transform 0.2s',
          ':hover': {
            transform: 'scale(1.08)',
            backgroundColor: '#ff9800',
            color: '#fff',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #1976d2 60%, #ff9800 100%)',
          boxShadow: '0 4px 20px #1976d288',
        },
      },
    },
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <Router>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <img src={class5Logo} alt="Class 5 Logo" style={{ height: 48, marginRight: 12, verticalAlign: 'middle' }} />
              <SchoolIcon sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', cursor: 'pointer',
                  ':hover': { color: '#fff', textShadow: '2px 2px 8px #1976d2' } }}
              >
                Class 5 Multilingual Learning Portal
              </Typography>
              <LanguageSwitcher />
              {subjects.map((subj) => (
                <Button
                  key={subj.name}
                  color="inherit"
                  component={Link}
                  to={subj.path}
                  startIcon={subj.icon}
                  sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                >
                  {subj.name}
                </Button>
              ))}
            </Toolbar>
          </AppBar>
          <Box sx={{ minHeight: '80vh', bgcolor: 'background.default', py: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/english" element={<English />} />
              <Route path="/mathematics" element={<Mathematics />} />
              <Route path="/science" element={<Science />} />
              <Route path="/social-studies" element={<SocialStudies />} />
              <Route path="/general-knowledge" element={<GeneralKnowledge />} />
            </Routes>
          </Box>
          <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Class 5 Learning Portal | Official resources: NCERT, ePathshala, DIKSHA
            </Typography>
          </Box>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
