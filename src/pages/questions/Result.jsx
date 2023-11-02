import React from 'react';
import { Typography } from '@mui/material';
import { getKoefTarget, getAf } from './utils';

const Result = ({ values: { weight, height, age, aktivita, target } }) => {
  const af = getAf(aktivita);
  const koefTarget = getKoefTarget(target);

  const bmr = 655.0955 + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
  const tdee = bmr * af;
  const kcl = tdee * koefTarget;

  return (
    <>
      <Typography variant="h4" m={3}>
        Tvůj denní příjem kalorií- {kcl} Kcal
      </Typography>
    </>
  );
};

export default Result;
