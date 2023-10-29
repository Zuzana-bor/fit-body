import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { items } from '../data';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body3,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Exercise = ({
  name,
  keys,
  description,
  media,
  category,
  musclesTargeted,
}) => {
  const upperBody = items.filter((item) => 'Horní část těla' === item.category);
  const lowerBody = items.filter((item) => 'Dolní část těla' === item.category);
  const cardio = items.filter((item) => 'cardio' === item.category);
  return (
    <>
      <Box>
        <h3>Horní část těla</h3>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {upperBody.map((item) => (
            <Box>
              <Item sx={{ my: 1 }}>
                <Card sx={{ maxWidth: 345, height: 300 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/assets/dite.jpg"
                    title={item.name}
                  />
                  <CardContent sx={{ overflowX: 'scroll' }}>
                    <Typography gutterBottom variant="h7" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      backgroundColor="green"
                      sx={{ px: '0' }}
                    >
                      <h4> Cílové svalstvo: </h4> {item.musclesTargeted}
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box>
        <h3>Dolní část těla</h3>
        {lowerBody.map((item) => (
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box>
        <h3>Kardio</h3>
        {cardio.map((item) => (
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Exercise;
