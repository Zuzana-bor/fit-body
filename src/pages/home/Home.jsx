import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Urls } from '../../config';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';
import { Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          overflow: 'hidden',
          height: 500,
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          },
        }}
      >
        <CardMedia
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            objectFit: 'cover',
            objectPosition: 'center center',
            zIndex: 0,
          }}
          image="/assets/home.jpg"
          title="green iguana"
          component="img"
        />{' '}
        <Container sx={{ mb: 10 }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={8}
            my={4}
            sx={{
              position: 'relative',

              zIndex: 2,
            }}
          >
            <Typography variant="h4" color="white">
              <div>Mysli na sebe i na mateřské dovolené.</div>
              <div> Buď v kondici. </div>
              <div> Buď svá. </div>
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 350,
              backgroundColor: 'primary',
              color: 'white',
              mt: 5,

              p: 1,
              position: 'relative',

              zIndex: 2,
            }}
          >
            <p className="motivace">
              Cvič tam, kde ti to vyhovuje a co tvé tělo potřebuje. Stravuj se
              tak, aby Ti tvé tělo bylo vděčné a dosáhla jsi svých cílů. Vyplň
              krátký dotazník a zjisti, jak na to.
            </p>
          </Box>

          <Stack
            spacing={2}
            alignItems="center"
            my={8}
            position="absolute"
            bottom={5}
            width="100%"
            left={0}
            right={0}
            zIndex={2}
          >
            <Button variant="contained" href={Urls.Questions} size="large">
              Pojď na to
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container>
        <Typography variant="h4" m={3}>
          Zjisti:
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          <Stack alignItems="center">
            <FitnessCenterTwoToneIcon fontSize="large" color="primary" />
            <Typography variant="h6">Jak si tréninky nakombinovat.</Typography>
          </Stack>
          <Stack alignItems="center">
            <EggAltTwoToneIcon fontSize="large" color="primary" />
            <Typography variant="h6">Jak se stravovat</Typography>
          </Stack>
          <Stack alignItems="center">
            <MoodTwoToneIcon fontSize="large" color="primary" />
            <Typography variant="h6">Jak být v pohodě a šťastná</Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
