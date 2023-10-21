import * as React from 'react';
import TextQuestion from './TextQuestion';
import { asksText } from '../../questions';
import { selectAsk } from '../../questions';
import SelectQuestion from './SelectQuestion';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Questions = () => {
  const [values, setValues] = React.useState({});

  const handleAnswer = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  console.log(values);

  return (
    <>
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

      <Stack direction="row" spacing={2}>
        {Object.values(values) !== '' ? (
          <Button variant="contained">Odeslat</Button>
        ) : (
          <Button variant="contained" disabled>
            Odeslat
          </Button>
        )}
      </Stack>
    </>
  );
};

export default Questions;
