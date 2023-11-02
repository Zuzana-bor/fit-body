import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import EggAltTwoToneIcon from '@mui/icons-material/EggAltTwoTone';
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';
import Result from './Result';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
          <Box m={10}>
            <Paper elevation={3} sx={{ p: 5 }}>
              <Stack gap={4}>
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">kg</InputAdornment>
                    ),
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                  }}
                  id="outlined-basic"
                  type="number"
                  label="Váha"
                  name="weight"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">cm</InputAdornment>
                    ),
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                  }}
                  id="outlined-basic"
                  type="number"
                  label="Výška"
                  name="height"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">let</InputAdornment>
                    ),
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                  }}
                  id="outlined-basic"
                  type="number"
                  label="Věk"
                  name="age"
                  variant="outlined"
                  onChange={handleChange}
                />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Pohlaví
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="gender"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Žena"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Muž"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Cíl</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="target"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="weightloss"
                      control={<Radio />}
                      label="hubnutí"
                    />
                    <FormControlLabel
                      value="maintenance"
                      control={<Radio />}
                      label="udržování"
                    />
                    <FormControlLabel
                      value="gaining"
                      control={<Radio />}
                      label="nabírání"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Kolik hodin spánku máš
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="sleep"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="5 a méně"
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio />}
                      label="6-7 hodin"
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio />}
                      label="8 a více hodin"
                    />
                  </RadioGroup>
                </FormControl>

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Aktivita"
                  name="activity"
                  defaultValue=""
                  onChange={handleChange}
                >
                  <MenuItem value="answer1">
                    'Sedavé zaměstnání + žádný trénink'
                  </MenuItem>
                  <MenuItem value="answer2">
                    {' '}
                    'Sedavé zaměstnání + trénink vyšší intenzity (posilování,
                    funkční trénink, kruhový trénink, běh, plavání apod.) 2x
                    týdně, případně vícekrát týdně o nižší intenzitě (jóga,
                    pilates)'
                  </MenuItem>
                  <MenuItem value="answer3">
                    'Sedavé zaměstnání + trénink vyšší intenzity 3x- 4x týdně;
                    nebo manuální těžké zaměstnání',
                  </MenuItem>
                  <MenuItem value="answer4">
                    'Sedavé zaměstnání + trénink vyšší intenzity 6x týdně a
                    více; nebo manuální těžké zaměstnání + trénink vyšší
                    intenzity 2x týdně'
                  </MenuItem>
                  <MenuItem value="answer5">
                    'Manuální těžké zaměstnání + trénink vyšší intenzity 3x – 4x
                    týdně'
                  </MenuItem>
                  <MenuItem value="answer6">
                    {' '}
                    'Manuální těžké zaměstnání ě trénink vyšší intenzity 6x
                    týdně a více (profesionální sportovci, trenéři a podobně)'
                  </MenuItem>
                </TextField>

                <TextField
                  id="outlined-select-currency"
                  select
                  label="Jak často chceš cvičit"
                  name="intensity"
                  defaultValue=""
                  onChange={handleChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                </TextField>
              </Stack>
            </Paper>
          </Box>

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
          <Result values={[values]} />
        </Box>
      )}
    </>
  );
};

export default Questions;
