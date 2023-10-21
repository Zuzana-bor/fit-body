import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextQuestion = ({ ask: [ask, answer1], onAnswer }) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          id="outlined-basic"
          type="number"
          label={ask.ask}
          name={ask.ask}
          variant="outlined"
          onChange={(event) => {
            onAnswer(event);
          }}
        />
      </Box>
    </>
  );
};

export default TextQuestion;
