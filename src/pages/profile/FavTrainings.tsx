import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const FavTrainings = () => {
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
        <Typography gutterBottom variant="h6"></Typography>
        <Typography variant="h1" color="text.secondary"></Typography>
      </CardContent>
    </Card>
  );
};

export default FavTrainings;
