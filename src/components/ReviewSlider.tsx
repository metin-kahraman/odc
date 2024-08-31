import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

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
  {
    name: 'Emily Johnson',
    text: 'The service was exceptional. I will definitely return.',
  },
  {
    name: 'Chris Lee',
    text: 'A solid choice for anyone looking for quality and value.',
  },
  {
    name: 'Anna White',
    text: 'Truly exceeded my expectations in every way.',
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
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: '10px',
          zIndex: 3,
          backgroundColor: '#FFA500',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#FF8C00',
          },
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowBack />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${reviews.length * 100}%`,
        }}
      >
        {reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 100%', // Her yorum ekranın tamamını kaplasın
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
              boxSizing: 'border-box', // Padding ve border hesaplamalarını dahil et
            }}
          >
            <Card
              sx={{
                width: '100%',
                maxWidth: '600px',
                backgroundColor: '#FFFAF0',
                border: '2px solid #FFA500',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: currentIndex === index ? 'scale(1.05)' : 'scale(0.95)',
                opacity: currentIndex === index ? 1 : 0.8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 0 }}>
                <img
                  src="/google-logo.png"
                  alt="Google Reviews"
                  style={{ width: '100px', height: 'auto' }}
                />
              </Box>
              <CardContent sx={{ padding: '10px' }}>
                <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                  {review.text}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  - {review.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: '10px',
          zIndex: 3,
          backgroundColor: '#FFA500',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#FF8C00',
          },
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}

export default ReviewSlider;
