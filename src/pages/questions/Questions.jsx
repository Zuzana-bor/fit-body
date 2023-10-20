import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import TextQuestion from './TextQuestion';
import { asksText } from '../../questions';
import { selectAsk } from '../../questions';
import { groupBy } from 'lodash';
import { AssistWalker } from '@mui/icons-material';
import SelectQuestion from './SelectQuestion';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Questions = () => {
  const [values, setValues] = React.useState({
    sex: '',
    weight: '',
    height: '',
    age: '',
    activity: '',
    target: '',
    intensity: '',
    sleep: '',
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Box m={10}>
        <Paper elevation={3} sx={{ p: 5 }}>
          {Object.entries(asksText).map(([key, value]) => (
            <TextQuestion ask={[value]} />
          ))}
          {selectAsk.map((ask) => (
            <SelectQuestion ask={[ask]} />
          ))}
        </Paper>
      </Box>
      <Stack direction="row" spacing={2}>
        {Object.values(values) ? (
          <Button variant="contained">Odeslat</Button>
        ) : (
          <Button variant="contained" disabled>
            Odeslat
          </Button>
        )}
        <Button variant="contained" disabled>
          Odeslat
        </Button>
      </Stack>
    </>
  );
};

export default Questions;
