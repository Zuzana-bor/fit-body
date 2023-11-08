import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { exercises } from '../../data/exercises';
import { groupBy } from 'lodash';
import ExerciseCard from './ExerciseCard';
import Grid from '@mui/material/Grid';

const Exercise = () => {
  const groupItems = groupBy(exercises, 'category');

  return (
    <>
      <Container sx={{ mb: 10 }}>
        {Object.entries(groupItems).map(([category, exercises]) => (
          <Box key={category} sx={{ flexGrow: 1 }}>
            <Typography my={4} variant="h4">
              {category}
            </Typography>{' '}
            <Grid container spacing={4}>
              {exercises.map((item) => (
                <Grid item xs={4}>
                  <ExerciseCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Exercise;
