"use client";
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  //borderColor:'orange',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const CustomDivider = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 2, // Divider yüksekliği
  backgroundColor: "orange",
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    borderBottom: `2px solid ${"orange"}`,
  },
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 50,
    height: 50,
    backgroundImage: 'url(https://i.postimg.cc/J4w07Fsz/415029410-908622684217705-5065322948124474079-n.jpg)', // Logo URL'sini buraya ekleyin
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%', // Oval yapmak için

  },
}));

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'İmplant Tedavisi',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity.',
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Diş Estetiği',
    description: 'Explore the key features of our latest product release that are helping businesses achieve their goals.',
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Design',
    title: 'Zirkonyum Diş',
    description: 'Stay ahead of the curve with the latest design trends and insights.',
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Company',
    title: "Porselen Diş",
    description: "Take a look at our company's journey and the milestones we've achieved along the way.",
  },
  {
    img: 'https://picsum.photos/800/450?random=5',
    title: "Dişteli Ortodontik Tedavi",
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    title: "Kanal Tedavisi",
  },
  {
    img: 'https://picsum.photos/800/450?random=7',
    title: "Diş Dolgusu",
  },
];

export default function About() {
  const isXs = useMediaQuery('(max-width:600px)');
  const isSm = useMediaQuery('(min-width:601px) and (max-width:900px)');
  const isMd = useMediaQuery('(min-width:901px) and (max-width:1200px)');
  const isLg = useMediaQuery('(min-width:1201px) and (max-width:1536px)');
  const isXl = useMediaQuery('(min-width:1537px)');
  console.log("isXs",isXs)
  console.log("isSm",isSm)
  console.log("isMd",isMd)
  console.log("isLg",isLg)
  console.log("isXl",isXl)

  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', mt: 24, mb: 16, gap: 4 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <StyledCard variant="outlined">
                <CardMedia
                  component="img"
                  alt={card.title}
                  image={card.img}
                  sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
                />
                <StyledCardContent>

                  <Typography sx={{textAlign:'center', alignSelf:'center'}}gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>

                </StyledCardContent>
              </StyledCard>
            </Grid>
            {/* Divider ekle */}
            {isXs && index < cardData.length - 1 && (
              <Grid item xs={12}>
                <CustomDivider />
              </Grid>
            )
            }
            {isMd && index < cardData.length - 1 && (index+1) %2 == 0 && (
              <Grid item xs={12}>
                <CustomDivider />
              </Grid>
            )
            }
            {isLg && index < cardData.length - 1 && (index+1) %3 == 0 && (
              <Grid item xs={12}>
                <CustomDivider />
              </Grid>
            )
            }
            {isXl && index < cardData.length - 1 && (index+1) %4 == 0 && (
              <Grid item xs={12}>
                <CustomDivider />
              </Grid>
            )
            }
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
}
