import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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

const Plans = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack direction="row" my={8} spacing={2}>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem>
            <ListItemText>Full body</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>Horní část těla</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>Dolní část těla</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemText>Kardio</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Začátečník" {...a11yProps(0)} />
            <Tab label="Pokročilý" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Začátečník
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Pokročilý
        </CustomTabPanel>
      </Box>
    </Stack>
  );
};

export default Plans;
