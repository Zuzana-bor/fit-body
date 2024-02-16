import { useEffect, useState } from 'react';
import { ApiUrls, FirebaseUser } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import { fetchApiData } from './utils';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../store/firebase';
import { getISOWeek } from 'date-fns';

const useData = () => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>();
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>();
  const [user, setUser] = useState<FirebaseUser>();

  const getCurrentWeekNumber = (): number => {
    const currentDate = new Date();
    return getISOWeek(currentDate);
  };

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

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      const weekNumber = getCurrentWeekNumber();
      if (authUser) {
        setUser({
          uid: authUser.uid,
          displayName: authUser.displayName || '',
          email: authUser.email || '',
          weeks: [{ weekNumber: weekNumber, burned: 0 }],
          likePlan: [''],
        });
      } else {
        setUser(undefined);
        console.log('no such document');
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    exercises,
    trainings,
    loading,
    trainingPlans,
    user,
  };
};

export default useData;
