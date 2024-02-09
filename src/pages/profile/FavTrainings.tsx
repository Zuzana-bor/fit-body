import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { AppContext } from '../../store/AppContext ';
import React from 'react';
import { Urls } from '../../config';

const FavTrainings = () => {
  const { likePlan } = React.useContext(AppContext);
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
          Tvé oblíbené tréninky
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link component="a" href={`${Urls.Plans}#${likePlan}`}>
            {likePlan}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FavTrainings;
