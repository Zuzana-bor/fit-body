import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Urls } from '../../config';
import { EggAltTwoTone, FitnessCenter } from '@mui/icons-material';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';
import { Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {' '}
      <Box
        sx={{
          overflow: 'hidden',
          height: 600,
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
            objectPosition: 'center 25%',
            zIndex: 0,
            height: '100%',
          }}
          image="/assets/home.jpg"
          title="home"
          component="img"
        />
        <Container>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{
              position: 'relative',
              top: 80,
              zIndex: 2,
              mr: 10,
            }}
          >
            <Typography variant="h3" color="white">
              Mysli na sebe i na mateřské dovolené.
            </Typography>
            <Typography variant="h3" color="white">
              Buď v kondici.
            </Typography>
            <Typography variant="h3" color="white">
              Buď svá.
            </Typography>
          </Stack>
          <Box
            sx={(theme) => ({
              width: 450,
              color: 'white',
              p: 2,
              position: 'relative',
              top: 155,
              right: 15,
              zIndex: 2,
              backgroundColor: alpha(theme.palette.primary.main, 0.6),
            })}
          >
            <Typography variant="h6">
              Cvič tam, kde Ti to vyhovuje a co tvé tělo potřebuje. Stravuj se
              tak, aby Ti tvé tělo bylo vděčné a dosáhla jsi svých cílů. Vyplň
              krátký dotazník a zjisti, jak na to.
            </Typography>
          </Box>

          <Stack
            alignItems="center"
            position="absolute"
            bottom={30}
            width="100%"
            left={0}
            right={0}
            zIndex={2}
          >
            <Button
              variant="contained"
              to={Urls.Questions}
              size="large"
              component={RouterLink}
              key={Urls.Questions}
            >
              Pojď na to
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ mb: 10 }}>
        <Typography variant="h4" my={4} textAlign="center">
          Co zjistíš vyplněním dotazníku?
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Stack alignItems="center" spacing={{ xs: 1, sm: 2, md: 4 }}>
            <FitnessCenter fontSize="large" color="primary" />
            <Typography variant="h6">Jak si tréninky nakombinovat.</Typography>
          </Stack>
          <Stack alignItems="center" spacing={{ xs: 1, sm: 2, md: 4 }}>
            <EggAltTwoTone fontSize="large" color="primary" />
            <Typography variant="h6">Jak se stravovat</Typography>
          </Stack>
          <Stack alignItems="center" spacing={{ xs: 1, sm: 2, md: 4 }}>
            <MoodTwoToneIcon fontSize="large" color="primary" />
            <Typography variant="h6">Jak být v pohodě a šťastná</Typography>
          </Stack>
        </Stack>
        <Stack alignItems="center" m={5}>
          <Button
            variant="contained"
            to={Urls.Questions}
            size="large"
            component={RouterLink}
            key={Urls.Questions}
          >
            Dotazník
          </Button>
        </Stack>
      </Container>{' '}
    </>
  );
};

export default Home;
