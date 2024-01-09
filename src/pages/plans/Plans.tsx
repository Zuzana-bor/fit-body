import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import { getPlansTabs } from './utils';
import { PlansTabsPart, plansTabsConfig } from './config';
import TrainingTable from './TrainingTable';
import { AppContext } from '../../store/AppContext ';
import PageLoader from '../../layout/PageLoader';

const Plans = () => {
  const { trainings, loading } = React.useContext(AppContext);
  const [plansTabs, setPlansTabs] = useState<PlansTabsPart[]>();
  const [activeTab, setActiveTab] = useState<string>();

  const activeTraining = plansTabs?.find(
    (item) => item.id === activeTab,
  )?.content;

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (trainings) {
      const plansTabs = getPlansTabs(plansTabsConfig, trainings);
      setPlansTabs(plansTabs);
      setActiveTab(plansTabs[0].id);
    }
  }, [trainings]);

  return (
    <Container sx={{ mb: 10 }}>
      {loading && <PageLoader />}
      <Box pt={4}>
        <Stack direction="row">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <List>
                {plansTabs?.map(({ name, icon: Icon, id }) => {
                  return (
                    <ListItem disablePadding key={id}>
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
              {activeTraining && <TrainingTable training={activeTraining} />}
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
};

export default Plans;
