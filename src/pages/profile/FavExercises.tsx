import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { AppContext } from '../../store/AppContext ';
import React from 'react';
import { Urls } from '../../config';

const FavExercises = () => {
  const { likeExercise } = React.useContext(AppContext);

  return (
    <Box p={5} sx={{ borderRadius: 8, bgcolor: 'white' }}>
      <Typography variant="h6">Tvé oblíbené cviky</Typography>
      <Typography variant="h4" color="text.primary">
        <List>
          {likeExercise
            ?.filter(
              (value: string, index: number, self: string[]) =>
                self.indexOf(value) === index,
            )
            ?.map((exercise: string) => (
              <ListItem key={exercise}>
                <Link component="a" href={`${Urls.Exercise}#${likeExercise}`}>
                  {exercise}
                </Link>
              </ListItem>
            ))}
        </List>
      </Typography>
    </Box>
  );
};

export default FavExercises;
