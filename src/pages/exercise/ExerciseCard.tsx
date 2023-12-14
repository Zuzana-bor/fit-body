import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Exercise } from '../../data/exercises';

type ExerciseCardProps = {
  item: Exercise;
};

const ExerciseCard: FC<ExerciseCardProps> = ({
  item: { name, description, media, id },
}) => {
  return (
    <Card sx={{ height: '100%' }} id={id}>
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
