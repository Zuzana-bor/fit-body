import React from 'react';
import { exercises } from '../../../data/exercises';

const UpperBody = () => {
  const relatedExercises = exercises.filter(
    (exercise) => exercise.category === 'Horní část těla',
  );

  console.log(relatedExercises);

  return (
    <>
      {relatedExercises.map((name) => (
        <li>{name.name} </li>
      ))}
    </>
  );
};

export default UpperBody;
