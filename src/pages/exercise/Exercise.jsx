import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { exercises } from '../../data/exercises';
import { groupBy } from 'lodash';
import ExerciseCard from './ExerciseCard';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Exercise = ({
  name,
  keys,
  description,
  media,
  category,
  musclesTargeted,
}) => {
  const upperBody = exercises.filter(
    (item) => 'Horní část těla' === item.category,
  );
  const lowerBody = exercises.filter(
    (item) => 'Dolní část těla' === item.category,
  );
  const cardio = exercises.filter((item) => 'cardio' === item.category);
  return (
    <>
      {Object.entries(groupItems).map(([category, exercises]) => (
        <Box key={category} sx={{ flexGrow: 1 }}>
          <Typography variant="h4">{category}</Typography>
          <Grid container spacing={2}>
            {exercises.map((item) => (
              <Grid item xs={3}>
                <ExerciseCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default Exercise;
