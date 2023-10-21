import * as React from 'react';
import TextQuestion from './TextQuestion';
import { asksText } from '../../questions';
import { selectAsk } from '../../questions';
import SelectQuestion from './SelectQuestion';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';
import Result from '../../component/Result';

const Questions = () => {
  const [values, setValues] = React.useState({});

  const handleAnswer = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCLick = () => {};

  return (
    <>
      <Typography variant="h4" m={3}>
        Zjisti:
      </Typography>
      <Stack direction="row" justifyContent="space-around">
        <Stack alignItems="center">
          <FitnessCenterTwoToneIcon fontSize="large" color="primary" />
          <Typography variant="h6">Jak si tréninkgy nakombinovat.</Typography>
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
      <Box m={10}>
        <Paper elevation={3} sx={{ p: 5 }}>
          {Object.entries(asksText).map(([key, value]) => (
            <TextQuestion ask={[value]} onAnswer={handleAnswer} />
          ))}
          {selectAsk.map((ask) => (
            <SelectQuestion ask={[ask]} onAnswer={handleAnswer} />
          ))}
        </Paper>
      </Box>

      {Object.values(values).length === 8 ? (
        <Button variant="contained" onClick={handleCLick}>
          Odeslat
        </Button>
      ) : (
        <Button variant="contained" disabled>
          Odeslat
        </Button>
      )}

      <Box>
        <Result values={[values]} />
      </Box>
    </>
  );
};

export default Questions;
