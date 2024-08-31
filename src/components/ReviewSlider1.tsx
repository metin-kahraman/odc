import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import GoogleLogo from './img/googleReviews.png'; // Google'ın yorum logosunu kullanmak için bir resim dosyası

const reviews = [
  {
    name: 'John Doe',
    text: 'This is an amazing product! Highly recommend it to everyone.',
  },
  {
    name: 'Jane Smith',
    text: 'Absolutely love it! Great quality and excellent support.',
  },
  {
    name: 'Michael Brown',
    text: 'Good value for money. Would buy again!',
  },
];

function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Her 5 saniyede bir geçiş yap
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <Card
        sx={{
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '15px',
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img src="/google-logo.png" alt="Google Reviews" style={{ width: 100, height: 'auto' }} />
        </Box>
        <CardContent>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            {reviews[currentIndex].text}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            - {reviews[currentIndex].name}
          </Typography>
        </CardContent>
      </Card>
      <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default ReviewSlider;
