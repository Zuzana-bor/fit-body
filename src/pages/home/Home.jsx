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

const Home = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <Box sx={{ backgroundImage: 'url(/assets/women.jpg)', p: 4, m: 0 }}>
        <Stack
          direction="column"
          justifyContent="space-between"
          spacing={8}
          my={4}
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
          }}
        >
          <p className="motivace">
            Cvič tam, kde ti to vyhovuje a co tvé tělo potřebuje. Stravuj se
            tak, aby Ti tvé tělo bylo vděčné a dosáhla jsi svých cílů. Vyplň
            krátký dotazník a zjisti, jak na to.
          </p>
        </Box>

        <Stack spacing={2} alignItems="center" my={8}>
          <Button variant="contained" href={Urls.Questions}>
            Pojď na to
          </Button>
        </Stack>
      </Box>
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
  );
};

export default Home;
