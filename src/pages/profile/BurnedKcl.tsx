import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

import { AppContext } from '../../store/AppContext ';

const BurnnedKcl = () => {
  const { notes } = React.useContext(AppContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        image="/assets/burnedKcl.png"
        title="spálené kalorie"
        component="img"
        sx={{
          height: {
            xs: 100,
            sm: 200,
            md: 250,
            lg: 250,
          },
          objectFit: 'contain',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Tento týden jsi spálila
        </Typography>
        <Typography variant="h1" color="text.secondary">
          {notes ? `${notes} kcl` : 'No notes available'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BurnnedKcl;
