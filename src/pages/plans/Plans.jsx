import * as React from 'react';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import UpperBody from './splitPlans/UpperBody';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

const Plans = () => {
  const [training, setTraining] = React.useState(<UpperBody />);
  const handleCLick = () => {
    setTraining();
  };
  return (
    <Stack direction="row">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon onCLick={handleCLick}>
                  <AccessibilityNewIcon />
                </ListItemIcon>
                <ListItemText primary="Horní část těla" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TransferWithinAStationIcon />
                </ListItemIcon>
                <ListItemText primary="Dolní část těla" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
      <Box>{training}</Box>
    </Stack>
  );
};

export default Plans;
