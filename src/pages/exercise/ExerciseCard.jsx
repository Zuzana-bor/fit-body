import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ExerciseCard = ({ item: { name, description, media } }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <CardMedia
          sx={{ height: 250, objectFit: 'contain' }}
          component="img"
          image={media}
          title={name}
        />

        <Typography gutterBottom variant="h6">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
