import {
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { AppContext } from '../../store/AppContext ';
import React from 'react';

const FavTrainings = () => {
  const { likePlan } = React.useContext(AppContext);
  console.log(likePlan);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6">
          Tvé oblíbené tréninky
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <List>
            {likePlan
              ?.filter(
                (value: string, index: number, self: string[]) =>
                  self.indexOf(value) === index,
              ) // Odstranění duplikátů
              ?.map((plan: string) => (
                <ListItem key={plan}>
                  <Link>{plan}</Link>
                </ListItem>
              ))}
          </List>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FavTrainings;
