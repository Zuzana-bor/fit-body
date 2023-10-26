import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import { activity } from '../af';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Form = ({ ask, answer1, answer2 }) => {
  const [value, setValue] = React.useState(1);
  const [ask1, setAsk1] = React.useState('female');
  const [ask2, setAsk2] = React.useState('');
  const [ask3, setAsk3] = React.useState('');
  const [ask4, setAsk4] = React.useState('');
  const [ask5, setAsk5] = React.useState('');
  const [ask6, setAsk6] = React.useState('');
  const [ask7, setAsk7] = React.useState('');
  const [ask8, setAsk8] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeAsk1 = (event) => {
    setAsk1(event.target.value);
  };
  const handleChangeAsk2 = (event) => {
    setAsk2(event.target.value);
  };

  const handleChangeAsk3 = (event) => {
    setAsk3(event.target.value);
  };

  const handleChangeAsk4 = (event) => {
    setAsk4(event.target.value);
  };

  const handleChangeAsk5 = (event) => {
    setAsk5(event.target.value);
  };

  const handleChangeAsk6 = (event) => {
    setAsk6(event.target.value);
  };

  const handleChangeAsk7 = (event) => {
    setAsk7(event.target.value);
  };

  const handleChangeAsk8 = (event) => {
    setAsk8(event.target.value);
  };

  return (
    <>
      <Stack spacing={2} m={4} alignItems="center">
        <Pagination
          count={8}
          variant="outlined"
          color="secondary"
          onChange={handleChange}
          {...a11yProps(0)}
        />
      </Stack>

      <CustomTabPanel value={value} index={1}>
        <Stack alignItems="center">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Pohlaví</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              value={ask1}
              onChange={handleChangeAsk1}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Žena"
              />
              <FormControlLabel value="male" control={<Radio />} label="Muž" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Stack alignItems="center">
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput
                onChange={handleChangeAsk2}
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">kg</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">
                Váha
              </FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Stack alignItems="center">
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput
                onChange={handleChangeAsk3}
                id="outlined-adornment-height"
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
                aria-describedby="outlined-height-helper-text"
                inputProps={{
                  'aria-label': 'height',
                }}
              />
              <FormHelperText id="outlined-height-helper-text">
                Výška
              </FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Stack alignItems="center">
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <OutlinedInput
                onChange={handleChangeAsk4}
                id="outlined-adornment-age"
                endAdornment={
                  <InputAdornment position="end">let</InputAdornment>
                }
                aria-describedby="outlined-age-helper-text"
                inputProps={{
                  'aria-label': 'age',
                }}
              />
              <FormHelperText id="outlined-age-helper-text">Věk</FormHelperText>
            </FormControl>
          </Box>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Stack alignItems="center">
          <Autocomplete
            onChange={handleChangeAsk5}
            disablePortal
            id="combo-box-demo"
            options={activity}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Aktivita" />}
          />
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={6}>
        <Stack alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Cíl</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={ask6}
              label="Target"
              onChange={handleChangeAsk6}
            >
              <MenuItem value={'hubnutí'}>Hubnutí</MenuItem>
              <MenuItem value={'udržování váhy'}>Udržování váhy</MenuItem>
              <MenuItem value={'přibírání'}>Přibírání</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Stack alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Jak často můžeš cvičit?
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={ask7}
              label="How"
              onChange={handleChangeAsk7}
            >
              <MenuItem value={'1x'}>1x týdně</MenuItem>
              <MenuItem value={'2x '}>2x týdně </MenuItem>
              <MenuItem value={'3x'}>3x týdně</MenuItem>
              <MenuItem value={'4x'}>4x týdně</MenuItem>
              <MenuItem value={'5x'}>5x týdně</MenuItem>
              <MenuItem value={'6x'}>6x týdně</MenuItem>
              <MenuItem value={'7x'}>7x týdně</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Stack alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Kolik hodin denně spíš?
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={ask8}
              label="How"
              onChange={handleChangeAsk8}
            >
              <MenuItem value={'5'}>5 hodin a méně</MenuItem>
              <MenuItem value={'5-6 '}>5-6 hodin </MenuItem>
              <MenuItem value={'7'}>7 hodin</MenuItem>
              <MenuItem value={'8'}>8 hodin a více</MenuItem>
            </Select>
          </FormControl>
          <button>Odeslat</button>
        </Stack>
      </CustomTabPanel>
    </>
  );
};

export default Form;
