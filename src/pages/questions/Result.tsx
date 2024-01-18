import React, { FC } from 'react';
import { FormAnswers } from '../../config';
import { getResult } from './utils';
import SleepCard from './SleepCard';
import KclCard from './KclCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PlanCard from './PlanCard';
import { Grid, Typography } from '@mui/material';

type ResultProps = {
  values: FormAnswers;
};

const Result: FC<ResultProps> = ({ values }) => {
  const { trainingPlanDays, kcl, sleepInfo } = getResult(values);
  return (
    <>
      <List sx={{ mb: '2' }}>
        {trainingPlanDays && (
          <Grid container spacing={2}>
            <ListItem>
              <Grid item xs={3}>
                <Avatar
                  alt="pohyb"
                  src="/assets/info_fitness.png"
                  sx={{
                    width: {
                      xs: 100,
                      sm: 200,
                      md: 250,
                      lg: 250,
                    },
                    height: {
                      xs: 100,
                      sm: 200,
                      md: 250,
                      lg: 250,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={9}>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      component="div"
                      variant="h4"
                      gutterBottom
                      align="center"
                    >
                      Pohyb
                    </Typography>
                  }
                  secondary={<PlanCard days={trainingPlanDays} />}
                />
              </Grid>
            </ListItem>
          </Grid>
        )}
        <Grid container spacing={2}>
          <ListItem>
            <Grid item xs={3}>
              <Avatar
                alt="kalorie"
                src="/assets/info_food.png"
                sx={{
                  width: {
                    xs: 100,
                    sm: 200,
                    md: 250,
                    lg: 250,
                  },
                  height: {
                    xs: 100,
                    sm: 200,
                    md: 250,
                    lg: 250,
                  },
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <ListItemText
                disableTypography
                sx={{ backgroundColor: '#e8f5e9', m: '3' }}
                primary={
                  <Typography
                    component="div"
                    variant="h4"
                    gutterBottom
                    align="center"
                  >
                    Kalorie
                  </Typography>
                }
                secondary={<KclCard kcl={kcl} />}
              />
            </Grid>
          </ListItem>
        </Grid>
        <Grid container spacing={2}>
          <ListItem>
            <Grid item xs={3}>
              <Avatar
                alt="spánek"
                src="/assets/info_sleep.png"
                sx={{
                  width: {
                    xs: 100,
                    sm: 200,
                    md: 250,
                    lg: 250,
                  },
                  height: {
                    xs: 100,
                    sm: 200,
                    md: 250,
                    lg: 250,
                  },
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    component="div"
                    variant="h4"
                    gutterBottom
                    align="center"
                  >
                    Spánek
                  </Typography>
                }
                secondary={<SleepCard sleepInfo={sleepInfo} />}
              />
            </Grid>
          </ListItem>
        </Grid>
      </List>
    </>
  );
};

export default Result;
