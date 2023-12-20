import React, { FC } from 'react';
import { FormAnswers } from '../../config';
import {
  getKoefTarget,
  getAf,
  getSleepInfo,
  getTrainingPlanDays,
} from './utils';
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

const Result: FC<ResultProps> = ({
  values: { weight, height, age, activity, target, intensity, sleep },
}) => {
  const af = getAf(activity);
  const koefTarget = getKoefTarget(target);
  const sleepInfo = getSleepInfo(sleep);
  const trainingPlanDays = getTrainingPlanDays(intensity);
  console.log(trainingPlanDays);
  const bmr = 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
  const tdee = bmr * af;
  const kcl = Math.round(tdee * koefTarget);

  return (
    <>
      <List sx={{ mb: '2' }}>
        {trainingPlanDays ? (
          <Grid container spacing={2}>
            <ListItem>
              <Grid item={true} xs={3}>
                <Avatar
                  alt="pohyb"
                  src="/assets/info_fitness.png"
                  sx={{ width: 250, height: 250 }}
                />
              </Grid>
              <Grid item={true} xs={9}>
                <ListItemText
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
        ) : null}
        <Grid container spacing={2}>
          <ListItem>
            <Grid item={true} xs={3}>
              <Avatar
                alt="kalorie"
                src="/assets/info_food.png"
                sx={{ width: 250, height: 250 }}
              />
            </Grid>
            <Grid item={true} xs={9}>
              <ListItemText
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
            <Grid item={true} xs={3}>
              <Avatar
                alt="spánek"
                src="/assets/info_sleep.png"
                sx={{ width: 250, height: 250 }}
              />
            </Grid>
            <Grid item={true} xs={9}>
              <ListItemText
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
