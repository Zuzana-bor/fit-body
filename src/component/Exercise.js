import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyCard from './MyCard';
import { items } from '../data';

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

const Exercise = () => {
  const [value, setValue] = React.useState(0);

  // const [changeIndex, setChangeIndex] = React.useState('0');

  const relatedExercise = items.filter((item) => value === items.id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const relatedExercise = items.filter((item) => item.id === changeIndex);

  return (
    <Box sx={{ width: '100%' }}>
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
        {relatedExercise.map((item) => (
          <MyCard key={item.name} exercise={item} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {relatedExercise.map((item) => (
          <MyCard key={item.name} exercise={item} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {relatedExercise.map((item) => (
          <MyCard key={item.name} exercise={item} />
        ))}
      </CustomTabPanel>
    </Box>
  );
};

export default Exercise;
