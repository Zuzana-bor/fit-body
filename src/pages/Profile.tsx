import { Paper, Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';

const Profile = () => {
  return (
    <Stack m={4}>
      <Typography level="h1">Ahoj Jano,</Typography>
      <Paper>
        <Typography>tento týden jsi spálila 0 kcl</Typography>
      </Paper>
      <Typography>tvé oblíbené tréninky</Typography>
      <Typography>tvé oblíbené cviky</Typography>
      <Typography>tvé fotky</Typography>
    </Stack>
  );
};

export default Profile;
