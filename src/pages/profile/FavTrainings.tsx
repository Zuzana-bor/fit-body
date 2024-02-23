import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { AppContext } from '../../store/AppContext ';
import React from 'react';
import { Urls } from '../../config';

const FavTrainings = () => {
  const { likePlan } = React.useContext(AppContext);
  console.log(likePlan);
  return (
    <Box p={5} sx={{ borderRadius: 8, bgcolor: 'white' }}>
      <Typography variant="h6">Tvé oblíbené tréninky</Typography>
      <Typography variant="h4" color="text.primary">
        <List>
          {likePlan
            ?.filter(
              (value: string, index: number, self: string[]) =>
                self.indexOf(value) === index,
            )
            ?.map((plan: string) => (
              <ListItem key={plan}>
                <Link component="a" href={`${Urls.Plans}#${likePlan}`}>
                  {plan}
                </Link>
              </ListItem>
            ))}
        </List>
      </Typography>
    </Box>
  );
};

export default FavTrainings;
