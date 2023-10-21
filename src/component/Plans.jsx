import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import Plan from '../pages/plans/Plan';

const Plans = () => {
  const [muscles, setMuscles] = React.useState('');
  const handleClick = (event) => {
    setMuscles(event.target.outerText);
  };
  return (
    <>
      <Stack direction="row" my={8} spacing={2}>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
          <MenuList>
            <MenuItem>
              <ListItemText onClick={handleClick}>Full body</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText onClick={handleClick}>Horní část těla</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText onClick={handleClick}>Dolní část těla</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText onClick={handleClick}>Kardio</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Stack>
      <Plan muscles={muscles} />
    </>
  );
};

export default Plans;
