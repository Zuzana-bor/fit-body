import { useEffect, useState } from 'react';
import { ApiUrls } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';
import { TrainingPlan } from '../data/trainingsPlans';

const useData = () => {
  const [loading, setLoading] = useState(false);

  const [exercises, setExercises] = useState<Exercise[]>();

  const fetchExercises = async () => {
    const exercisesResponse = await fetch(`${ApiUrls.Exercises}?delay=0`);

    if (exercisesResponse.ok) {
      const exercisesResult = await exercisesResponse.json();

      setExercises(exercisesResult);
    } else {
      console.error('Response cannot be parsed', exercisesResponse);
    }
  };
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();

  const fetchTrainings = async () => {
    const response = await fetch(`${ApiUrls.Trainings}?delay=0`);

    if (response.ok) {
      const result = await response.json();

      setTrainingsData(result);
    } else {
      console.error('Response cannot be parsed', response);
    }
  };

  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>();

  const fetchTrainingPlans = async () => {
    const trainingPlansResponse = await fetch(
      `${ApiUrls.TrainingPlans}?delay=0`,
    );

    if (trainingPlansResponse.ok) {
      const trainingPlansResult = await trainingPlansResponse.json();

      setTrainingPlans(trainingPlansResult);
    } else {
      console.error('Response cannot be parsed', trainingPlansResponse);
    }
  };

  const trainings =
    exercises && trainingsData
      ? getTrainings(trainingsData, exercises)
      : undefined;

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchExercises(), fetchTrainings(), fetchTrainingPlans]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { exercises, trainings, loading, trainingPlans };
};

export default useData;
