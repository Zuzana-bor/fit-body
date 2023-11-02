import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';
import Result from './Result';
import QuestionsForm from './QuestionsForm';

const Questions = () => {
  const [values, setValues] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isFilled = Object.values(values).length === 8;

  console.log(values);
  return (
    <>
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
      {!isSubmitted ? (
        <>
          <QuestionsForm handleChange={handleChange} />

          <Button
            variant="contained"
            disabled={!isFilled}
            onClick={handleSubmit}
          >
            Odeslat
          </Button>
        </>
      ) : (
        <Box>
          <Result values={values} />
        </Box>
      )}
    </>
  );
};

export default Questions;
