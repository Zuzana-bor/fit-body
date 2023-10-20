import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { includes } from 'lodash';
import { selectAsk } from '../../questions';

const SelectQuestion = ({ ask: [ask, answer1] }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log([ask]);

  return (
    <>
      <FormControl>
        <FormLabel sx={{ m: 3 }} id="demo-controlled-radio-buttons-group">
          {ask.ask}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value={ask.answer1}
            control={<Radio />}
            label={ask.answer1}
          />
          <FormControlLabel
            value={ask.answer2}
            control={<Radio />}
            label={ask.answer2}
          />
          <FormControlLabel
            value={ask.answer3}
            control={<Radio />}
            label={ask.answer3}
          />
          <FormControlLabel
            value={ask.answer4}
            control={<Radio />}
            label={ask.answer4}
          />
          <FormControlLabel
            value={ask.answer5}
            control={<Radio />}
            label={ask.answer5}
          />
          <FormControlLabel
            value={ask.answer6}
            control={<Radio />}
            label={ask.answer6}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default SelectQuestion;
