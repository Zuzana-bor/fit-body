import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Form from '../pages/form/Form';

const Home = () => {
  return (
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
          Cvič tam, kde ti to vyhovuje a co tvé tělo potřebuje. Stravuj se tak,
          aby Ti tvé tělo bylo vděčné a dosáhla jsi svých cílů. Vyplň krátký
          dotazník a zjisti, jak na to.
        </p>
      </Box>
      <Stack spacing={2} alignItems="center" my={8}>
        <Button variant="contained" href={<Form />}>
          Pojď na to
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
