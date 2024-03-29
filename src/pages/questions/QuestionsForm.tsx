import React, { FC } from 'react';
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
import { FormAnswers } from '../../config';

type QuestionsFormProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formAnswers: FormAnswers;
  handleChangeNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const QuestionsForm: FC<QuestionsFormProps> = ({
  handleChange,
  formAnswers,
  handleChangeNumber,
}) => {
  return (
    <Box mb={4}>
      <Stack gap={4}>
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]',
          }}
          type="number"
          label="Váha"
          name="weight"
          value={formAnswers.weight || ''}
          variant="outlined"
          onChange={handleChangeNumber}
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]',
          }}
          type="number"
          label="Výška"
          name="height"
          value={formAnswers.height || ''}
          variant="outlined"
          onChange={handleChangeNumber}
        />
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">let</InputAdornment>,
          }}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]',
          }}
          type="number"
          label="Věk"
          name="age"
          value={formAnswers.age || ''}
          variant="outlined"
          onChange={handleChangeNumber}
        />
        <FormControl>
          <FormLabel id="gender">Pohlaví</FormLabel>
          <RadioGroup
            aria-labelledby="gender"
            defaultValue=""
            name="gender"
            value={formAnswers.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Žena" />
            <FormControlLabel value="male" control={<Radio />} label="Muž" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="target">Cíl</FormLabel>
          <RadioGroup
            aria-labelledby="target"
            defaultValue=""
            name="target"
            value={formAnswers.target}
            onChange={handleChange}
          >
            <FormControlLabel
              value="weightloss"
              control={<Radio />}
              label="Hubnutí"
            />
            <FormControlLabel
              value="maintenance"
              control={<Radio />}
              label="Udržování"
            />
            <FormControlLabel
              value="gaining"
              control={<Radio />}
              label="Nabírání"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="sleep">Kolik hodin spánku máš</FormLabel>
          <RadioGroup
            aria-labelledby="sleep"
            defaultValue=""
            name="sleep"
            value={formAnswers.sleep}
            onChange={handleChange}
          >
            <FormControlLabel value="5" control={<Radio />} label="6 a méně" />
            <FormControlLabel value="6" control={<Radio />} label="6-9" />
            <FormControlLabel value="9" control={<Radio />} label="9 a více" />
          </RadioGroup>
        </FormControl>

        <TextField
          select
          label="Aktivita"
          name="activity"
          value={formAnswers.activity}
          defaultValue=""
          onChange={handleChange}
        >
          <MenuItem value="activLevel1" sx={{ whiteSpace: 'normal' }}>
            Sedavé zaměstnání + žádný trénink
          </MenuItem>
          <MenuItem value="activLevel2" sx={{ whiteSpace: 'normal' }}>
            Sedavé zaměstnání + trénink vyšší intenzity (posilování, funkční
            trénink, kruhový trénink, běh, plavání apod.); 2x týdně, případně
            vícekrát týdně o nižší intenzitě (jóga, pilates)
          </MenuItem>
          <MenuItem value="activLevel3" sx={{ whiteSpace: 'normal' }}>
            Sedavé zaměstnání + trénink vyšší intenzity 3x- 4x týdně; nebo
            manuální těžké zaměstnání
          </MenuItem>
          <MenuItem value="activLevel4" sx={{ whiteSpace: 'normal' }}>
            Sedavé zaměstnání + trénink vyšší intenzity 6x týdně a více; nebo
            manuální těžké zaměstnání + trénink vyšší intenzity 2x týdně
          </MenuItem>
          <MenuItem value="activLevel5" sx={{ whiteSpace: 'normal' }}>
            Manuální těžké zaměstnání + trénink vyšší intenzity 3x-4x týdně
          </MenuItem>
          <MenuItem value="activLevel6" sx={{ whiteSpace: 'normal' }}>
            Manuální těžké zaměstnání + trénink vyšší intenzity 6x týdně a více
            (profesionální sportovci, trenéři a podobně)
          </MenuItem>
        </TextField>

        <TextField
          select
          label="Jak často chceš cvičit"
          name="intensity"
          value={formAnswers.intensity || ''}
          defaultValue=""
          onChange={handleChange}
        >
          <MenuItem value="intensity1">1x týdně</MenuItem>
          <MenuItem value="intensity2">2x týdně</MenuItem>
          <MenuItem value="intensity3">3x týdně</MenuItem>
          <MenuItem value="intensity4">4x týdně</MenuItem>
          <MenuItem value="intensity5">5x týdně</MenuItem>
          <MenuItem value="intensity6">6x týdně</MenuItem>
          <MenuItem value="intensity7">7x týdně</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};

export default QuestionsForm;
