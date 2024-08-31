"use client";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Latest from '../components/Latest';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

import NavBar from './NavBar';
import ReviewSlider from '@/components/ReviewSlider';
import getBlogTheme from '../theme/getBlogTheme';
import CustomBeforeAfterSlider from "../components/BeforeAfter";

export default function Blog() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  
  const blogTheme = createTheme({
    ...getBlogTheme(mode),
    palette: {
      background: {
        default: '#ECEFF1', // Gri-mavi bir ton, modern ve sofistike
      },
      primary: {
        main: '#FFA500', // Turuncu rengi ile uyumlu birincil renk
      },
      secondary: {
        main: '#FF5722', // Zengin bir turuncu tonu
      },
    },
  });

  const defaultTheme = createTheme({
    palette: { 
      mode,
      background: {
        default: '#ECEFF1', // Gri-mavi bir ton, modern ve sofistike
      },
    },
  });

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? blogTheme : defaultTheme}>
      <CssBaseline />
      <NavBar
        toggleCustomTheme={toggleCustomTheme}
        showCustomTheme={showCustomTheme}
        mode={mode}
        toggleColorMode={toggleColorMode}
      />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 24,
          mb: 16,
          gap: 4,
          bgcolor: 'background.default',
        }}
      >
        <Slider />
        <CustomBeforeAfterSlider
          beforeImage="https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg"
          afterImage="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg"
          handleImage="https://i.postimg.cc/J4w07Fsz/415029410-908622684217705-5065322948124474079-n.jpg"
        />
        <ReviewSlider />
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
