import { Paper, Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';
import React from 'react';
import { AppContext } from '../store/AppContext ';

const Profile = () => {
  const { user, notes } = React.useContext(AppContext);
  return (
    <Stack m={4}>
      <Typography level="h1">Ahoj {user?.displayName},</Typography>
      <Paper>
        <Typography>
          {notes
            ? `tento týden jsi spálila ${notes} kcl`
            : 'No notes available'}
        </Typography>
      </Paper>
      <Typography>tvé oblíbené tréninky</Typography>
      <Typography>tvé oblíbené cviky</Typography>
      <Typography>tvé fotky</Typography>
    </Stack>
  );
};

export default Profile;
