import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';

const QuestionsForm = ({ handleChange }) => {
  return (
    <Box mb={4}>
      <Stack gap={4}>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
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
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
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
            endAdornment: <InputAdornment position="end">let</InputAdornment>,
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
          <FormLabel id="demo-radio-buttons-group-label">Pohlaví</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="gender"
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Žena" />
            <FormControlLabel value="male" control={<Radio />} label="Muž" />
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
            <FormControlLabel value="5" control={<Radio />} label="5 a méně" />
            <FormControlLabel value="6" control={<Radio />} label="6-7 hodin" />
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
          <MenuItem value="activLevel1">
            Sedavé zaměstnání + žádný trénink
          </MenuItem>
          <MenuItem value="activLevel2">
            Sedavé zaměstnání + trénink vyšší intenzity (posilování, funkční
            trénink, kruhový trénink, běh, plavání apod.) 2x týdně, případně
            vícekrát týdně o nižší intenzitě (jóga, pilates)
          </MenuItem>
          <MenuItem value="activLevel3">
            Sedavé zaměstnání + trénink vyšší intenzity 3x- 4x týdně; nebo
            manuální těžké zaměstnání,
          </MenuItem>
          <MenuItem value="activLevel4">
            Sedavé zaměstnání + trénink vyšší intenzity 6x týdně a více; nebo
            manuální těžké zaměstnání + trénink vyšší intenzity 2x týdně
          </MenuItem>
          <MenuItem value="activLevel5">
            Manuální těžké zaměstnání + trénink vyšší intenzity 3x – 4x týdně
          </MenuItem>
          <MenuItem value="activLevel6">
            Manuální těžké zaměstnání ě trénink vyšší intenzity 6x týdně a více
            (profesionální sportovci, trenéři a podobně)
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
    </Box>
  );
};

export default QuestionsForm;
