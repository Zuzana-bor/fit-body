import * as React from 'react';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import { plansTabs } from '../../config';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const Plans = () => {
  const [activeTab, setActiveTab] = React.useState(plansTabs[0].id);

  const ActiveTabComponent = plansTabs.find(
    (item) => item.id === activeTab,
  )?.content;

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container sx={{ mb: 10 }}>
      <Stack direction="row">
        <Grid container>
          <Grid item xs={4}>
            <List>
              {plansTabs.map(({ name, icon: Icon, id }) => {
                return (
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleClick(id)}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      {name}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={8}>
            <ActiveTabComponent />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Plans;
