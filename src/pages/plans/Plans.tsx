import React, { FC } from 'react';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import { plansTabs } from '../../config';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Training from './Training';
import { PlansTabsPart } from '../../config';

type PlansProps = {
  plansTabs?: PlansTabsPart[];
};

const Plans: FC<PlansProps> = () => {
  const [activeTab, setActiveTab] = React.useState(plansTabs[0].id);

  const activeTraining = plansTabs.find(
    (item) => item.id === activeTab,
  )?.content;

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Container sx={{ mb: 10 }}>
      <Box pt={4}>
        <Stack direction="row">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <List>
                {plansTabs.map(({ name, icon: Icon, id }) => {
                  return (
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={id === activeTab}
                        onClick={() => handleClick(id)}
                      >
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
            <Grid item xs={9}>
              {activeTraining && <Training training={activeTraining} />}
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
};

export default Plans;
