import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { items } from '../../data';
import Stack from '@mui/material/Stack';
import { groupBy } from 'lodash';
import ExerciseCard from './ExerciseCard';

const Exercise = () => {
  const groupItems = groupBy(items, 'category');

  return (
    <>
      {Object.entries(groupItems).map(([category, exercises]) => (
        <Box key={category}>
          <Typography variant="h4">{category}</Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
            flexWrap="wrap"
          >
            {exercises.map((item) => (
              <ExerciseCard item={item} />
            ))}
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default Exercise;
