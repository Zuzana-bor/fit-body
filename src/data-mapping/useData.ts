import { useEffect, useState } from 'react';
import { ApiUrls, FirebaseUser } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import { fetchApiData } from './utils';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const useData = () => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>();
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>();
  const [user, setUser] = useState<FirebaseUser | undefined>();

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
    const auth = getAuth();
    onAuthStateChanged(
      auth,
      (authUser) =>
        (authUser: { uid: string; displayName: string; email: string }) => {
          if (authUser) {
            setUser({
              uid: authUser.uid,
              displayName: authUser.displayName,
              email: authUser.email,
            });
          } else {
            setUser({
              uid: '',
              displayName: '',
              email: '',
            });
          }
        },
    );
  }, []);
  return { exercises, trainings, loading, trainingPlans, user };
};

export default useData;
