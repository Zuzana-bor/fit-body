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
  const [expend, setExpend] = React.useState(false);

  return (
    <Box>
      <Item>
        <Card sx={{ height: 300 }}>
          {!expend ? (
            <>
              <CardMedia
                component="img"
                image={media}
                title={name}
                onClick={() => setExpend(!expend)}
              />
              <Typography gutterBottom variant="h8">
                {name}
              </Typography>
            </>
          ) : (
            <CardContent
              sx={{ overflowX: 'scroll' }}
              onClick={() => setExpend(!expend)}
            >
              <Typography gutterBottom variant="h6">
                {name}
              </Typography>
              {description}
              <Typography
                width="100%"
                variant="body2"
                color="text.secondary"
                p={0.5}
              ></Typography>
            </CardContent>
          )}
        </Card>
      </Item>
    </Box>
  );
};

export default ExerciseCard;
