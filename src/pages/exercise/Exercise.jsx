import * as React from 'react';
import { Box } from '@mui/material';
import { exercises } from '../../data/exercises';
import { groupBy } from 'lodash';
import ExerciseCard from './ExerciseCard';
import Grid from '@mui/material/Grid';

const Exercise = () => {
  const groupItems = groupBy(exercises, 'category');

  return (
    <>
      {Object.entries(groupItems).map(([category, exercises]) => (
        <Box key={category} sx={{ flexGrow: 1 }}>
          {category}
          <Grid container spacing={2}>
            {exercises.map((item) => (
              <Grid item xs={3} key={item.name}>
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
