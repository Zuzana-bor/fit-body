import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyCard from './MyCard';
import { items } from '../data';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
    id: `${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Exercise = ({ name, keys, description, media, category }) => {
  const [value, setValue] = React.useState(0);

  const relatedExercise = items.filter((item) => value === item.id);
  console.log(relatedExercise);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <img src="../assets/dite.jpg" alt="cvičete s dítětem" />

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Horní část těla" {...a11yProps(0)} />
          <Tab label="Dolní část těla" {...a11yProps(1)} />
          <Tab label="Cardio" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Stack direction="row" spacing={2}>
          {' '}
          {relatedExercise.map((item) => (
            <Item>
              <MyCard key={item.name} exercise={item} />
            </Item>
          ))}{' '}
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Stack direction="row" spacing={2}>
          {' '}
          {relatedExercise.map((item) => (
            <Item>
              <MyCard key={item.name} exercise={item} />
            </Item>
          ))}{' '}
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Stack direction="row" spacing={2}>
          {' '}
          {relatedExercise.map((item) => (
            <Item>
              <MyCard key={item.name} exercise={item} />
            </Item>
          ))}{' '}
        </Stack>
      </CustomTabPanel>
    </Box>
  );
};

export default Exercise;
