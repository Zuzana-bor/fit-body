import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { includes } from 'lodash';
import { selectAsk } from '../../questions';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

const SelectQuestion = ({
  ask: [ask, answer1, answer2, answer3, answer4, answer5, naswer6, answer7],
}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{ask.ask}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={ask.answer1}>{ask.answer1}</MenuItem>
            <MenuItem value={ask.answer2}>{ask.answer2}</MenuItem>
            <MenuItem value={ask.answer3}>{answer3}</MenuItem>
            <MenuItem value={ask.answer4}>{ask.answer4}</MenuItem>
            <MenuItem value={ask.answer5}>{ask.answer5}</MenuItem>
            <MenuItem value={ask.answer6}>{ask.answer6}</MenuItem>
            <MenuItem value={ask.answer8}>{ask.answer7}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectQuestion;
