import { useEffect, useState } from 'react';
import { ApiUrls } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';

const useData = () => {
  const [loading, setLoading] = useState(false);

  const [exercises, setExercises] = useState<Exercise[]>();

  const fetchExercises = async () => {
    const exercisesResponse = await fetch(`${ApiUrls.Exercises}?delay=5`);

    if (exercisesResponse.ok) {
      const exercisesResult = await exercisesResponse.json();

      setExercises(exercisesResult);
    } else {
      console.error('Response cannot be parsed', exercisesResponse);
    }
  };
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();

  const fetchTrainings = async () => {
    const response = await fetch(`${ApiUrls.Trainings}?delay=1`);

    if (response.ok) {
      const result = await response.json();

      setTrainingsData(result);
    } else {
      console.error('Response cannot be parsed', response);
    }
  };

  const trainings =
    exercises && trainingsData
      ? getTrainings(trainingsData, exercises)
      : undefined;

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchExercises(), fetchTrainings()]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { exercises, trainings, loading };
};

export default useData;
