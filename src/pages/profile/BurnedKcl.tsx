import { Box, Typography } from '@mui/material';
import React from 'react';

import { AppContext } from '../../store/AppContext ';

const BurnnedKcl = () => {
  const { notes } = React.useContext(AppContext);
  return (
    <Box p={5} sx={{ borderRadius: 8, bgcolor: 'white' }}>
      <Typography variant="h6">Tento týden jsi spálila</Typography>
      <Typography variant="h1" color="text.secondary">
        {notes ? `${notes} kcl` : '0 Kcl'}
      </Typography>
    </Box>
  );
};

export default BurnnedKcl;
