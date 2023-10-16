import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExerciseCard = ({
  item: { name, keys, description, media, category, musclesTargeted },
}) => {
  return (
    <Box>
      <Item sx={{ my: 1 }}>
        <Card sx={{ maxWidth: 345, height: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/assets/dite.jpg"
            title={name}
          />
          <CardContent sx={{ overflowX: 'scroll' }}>
            <Typography gutterBottom variant="h7" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              backgroundColor="green"
              sx={{ px: '0' }}
            >
              <h4> Cílové svalstvo: </h4> {musclesTargeted}
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Box>
  );
};

export default ExerciseCard;
