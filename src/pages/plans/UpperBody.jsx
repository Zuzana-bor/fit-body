import React from 'react';
import MenuPlans from './MenuPlans';
import { exercises } from '../../data/exercises';

const UpperBody = () => {
  const relatedExercises = exercises.filter(
    (exercise) => exercise.category === 'Horní část těla',
  );

  console.log(relatedExercises);

  return (
    <>
      <MenuPlans />

      {relatedExercises.map((name) => (
        <li>{name.name} </li>
      ))}
    </>
  );
};

export default UpperBody;
