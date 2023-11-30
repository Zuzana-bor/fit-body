import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { getKoefTarget, getAf } from './utils';
import { FormAnswers } from '../../config';

type ResultProps = {
  values: FormAnswers;
};

const Result: FC<ResultProps> = ({
  values: { weight, height, age, activity, target },
}) => {
  const af = getAf(activity);
  const koefTarget = getKoefTarget(target);

  const bmr = 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
  const tdee = bmr * af;
  const kcl = tdee * koefTarget;

  return (
    <Typography variant="h4" m={3}>
      Tvůj denní příjem kalorií- {kcl} Kcal
    </Typography>
  );
};

export default Result;
