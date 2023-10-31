import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { groupBy } from 'lodash';
import { items } from '../../data';

import ExerciseCard from './ExerciseCard';
import Grid from '@mui/material/Grid';

const Exercise = () => {
  const groupItems = groupBy(items, 'category');

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
