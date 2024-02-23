import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Exercise } from '../../data/exercises';
import { Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addLikeExercise } from '../../config';
import { AppContext } from '../../store/AppContext ';

type ExerciseCardProps = {
  item: Exercise;
};

const ExerciseCard: FC<ExerciseCardProps> = ({
  item: { name, description, media, id },
}) => {
  const { user } = React.useContext(AppContext);

  const handleLikeExercise = () => {
    if (user !== null && user !== undefined) {
      addLikeExercise(name, user);
    } else {
      console.error('oblíbený plán neni definován');
    }
  };

  return (
    <Card sx={{ height: '100%' }} id={id}>
      <CardContent>
        <CardMedia
          sx={{
            height: {
              xs: 100,
              sm: 200,
              md: 250,
              lg: 250,
            },
            objectFit: 'contain',
          }}
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
        <Button onClick={handleLikeExercise}>
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
