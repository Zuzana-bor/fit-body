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
import { Typography } from '@mui/material';

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
          <ListItem>
            <Avatar
              alt="pohyb"
              src="/assets/info_pohyb.png"
              sx={{ width: 100, height: 100, p: '4' }}
            />

            <ListItemText
              disableTypography
              primary={
                <Typography variant="h4" gutterBottom>
                  Pohyb
                </Typography>
              }
              secondary={<PlanCard days={trainingPlanDays} />}
            />
          </ListItem>
        ) : null}
        <ListItem>
          <Avatar
            alt="kalorie"
            src="/assets/info_jidlo.png"
            sx={{ width: 100, height: 100 }}
          />

          <ListItemText
            disableTypography
            primary={
              <Typography variant="h4" gutterBottom>
                Kalorie
              </Typography>
            }
            secondary={<KclCard kcl={kcl} />}
          />
        </ListItem>
        <ListItem>
          <Avatar
            alt="spánek"
            src="/assets/info_spanek.png"
            sx={{ width: 100, height: 100 }}
          />
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h4" gutterBottom>
                Pohyb
              </Typography>
            }
            secondary={<SleepCard sleepInfo={sleepInfo} />}
          />
        </ListItem>
      </List>
    </>
  );
};

export default Result;
