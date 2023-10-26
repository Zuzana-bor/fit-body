import React from 'react';
import { Typography } from '@mui/material';

const Result = ({ values: [key] }) => {
  const weight = key.weight;
  const height = key.height;
  const age = key.age;
  const aktivita = key.activity;
  const target = key.target;
  let af = '';
  let koefTarget = '';

  if (target === 'weightloss') {
    koefTarget = 0.8;
  } else if (target === 'maintenance') {
    koefTarget = 1;
  } else {
    koefTarget = 1.2;
  }

  if (aktivita === 'answer1') {
    af = 1.2;
  } else if (aktivita === 'answer2') {
    af = 1.4;
  } else if (aktivita === 'answer3') {
    af = 1.6;
  } else if (aktivita === 'answer4') {
    af = 1.8;
  } else if (aktivita === 'answer5') {
    af = 2;
  } else {
    af = 2.2;
  }

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
