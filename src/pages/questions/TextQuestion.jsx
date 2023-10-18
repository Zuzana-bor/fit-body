import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextQuestion = ({ ask, answer1 }) => {
  console.log(ask);
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
        <TextField id="outlined-basic" label={ask[1]} variant="outlined" />
      </Box>
    </>
  );
};

export default TextQuestion;
