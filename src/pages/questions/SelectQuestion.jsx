import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectQuestion = ({
  ask: [ask, answer1, answer2, answer3, answer4, answer5, naswer6, answer7],
  onAnswer,
}) => {
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{ask.ask}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name={ask.ask}
            label="ask"
            onChange={(event) => {
              onAnswer(event);
            }}
          >
            <MenuItem value={ask.answer1}>{ask.answer1}</MenuItem>
            <MenuItem value={ask.answer2}>{ask.answer2}</MenuItem>
            <MenuItem value={ask.answer3}>{ask.answer3}</MenuItem>
            <MenuItem value={ask.answer4}>{ask.answer4}</MenuItem>
            <MenuItem value={ask.answer5}>{ask.answer5}</MenuItem>
            <MenuItem value={ask.answer6}>{ask.answer6}</MenuItem>
            <MenuItem value={ask.answer7}>{ask.answer7}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectQuestion;
