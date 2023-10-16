import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Form from './Form';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

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
