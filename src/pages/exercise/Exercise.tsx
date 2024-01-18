import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { groupBy } from 'lodash';
import ExerciseCard from './ExerciseCard';
import Grid from '@mui/material/Grid';
import { AppContext } from '../../store/AppContext ';
import PageLoader from '../../layout/PageLoader';

const Exercise = () => {
  const { exercises, loading } = React.useContext(AppContext);
  const groupItems = groupBy(exercises, 'category');

  return (
    <Container sx={{ mb: 10 }}>
      {loading && <PageLoader />}
      {Object.entries(groupItems).map(([category, exercises]) => (
        <Box key={category} sx={{ flexGrow: 1 }}>
          <Typography my={4} variant="h4">
            {category}
          </Typography>
          <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            {exercises.map((item) => (
              <Grid item xs={6} md={4}>
                <ExerciseCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Exercise;
