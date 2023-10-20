import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextQuestion = ({ ask: [ask, answer1] }) => {
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
          label={ask.ask}
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default TextQuestion;