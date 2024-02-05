import React, { useEffect, useState } from 'react';
import { Button, TextField, useMediaQuery, useTheme } from '@mui/material';
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
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../store/firebase';

const Plans = () => {
  const { trainings, loading, newNote, setNewNote, user, notes, setNotes } =
    React.useContext(AppContext);
  const [plansTabs, setPlansTabs] = useState<PlansTabsPart[]>();
  const [activeTab, setActiveTab] = useState<string>();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

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
        <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
          {!isMatch ? (
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
          ) : (
            <Grid container spacing={2} direction="row" sx={{ m: 1 }}>
              {plansTabs?.map(({ name, icon: Icon, id }) => {
                return (
                  <Grid xs={6}>
                    <ListItemButton
                      selected={id === activeTab}
                      onClick={() => handleClick(id)}
                      key={id}
                    >
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      {name}
                    </ListItemButton>
                  </Grid>
                );
              })}
            </Grid>
          )}
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="burned"
              label="spáleno kalirií"
              type="number"
              variant="outlined"
            />
            <Button>Uložit</Button>
          </Box>
          <Grid item xs={9}>
            {activeTraining && <TrainingTable training={activeTraining} />}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Plans;
