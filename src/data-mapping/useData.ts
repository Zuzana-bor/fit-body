import { useEffect, useState } from 'react';
import { ApiUrls } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import { fetchApiData } from './utils';

const useData = () => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>();
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>();

  const trainings =
    exercises && trainingsData
      ? getTrainings(trainingsData, exercises)
      : undefined;

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([
      fetchApiData(ApiUrls.Exercises, setExercises),
      fetchApiData(ApiUrls.Trainings, setTrainingsData),
      fetchApiData(ApiUrls.TrainingPlans, setTrainingPlans),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { exercises, trainings, loading, trainingPlans };
};

export default useData;
