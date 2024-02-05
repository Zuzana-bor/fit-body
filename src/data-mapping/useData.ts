import { useEffect, useState } from 'react';
import { ApiUrls, FirebaseUser } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import { fetchApiData } from './utils';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../store/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getISOWeek } from 'date-fns';

const useData = () => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>();
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>();
  const [user, setUser] = useState<FirebaseUser>();
  const [notes, setNotes] = useState<number | undefined>(0);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUser({
          uid: authUser.uid,
          displayName: authUser.displayName || '',
          email: authUser.email || '',
          weeks: { 1: { burned: 0 } },
        });
        const currentWeek = getCurrentWeekNumber();
        console.log(currentWeek);
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users'),
            where(`weeks.${currentWeek}.burned`, `>`, 0),
          ),
        );

        let totalBurned = 0;
        querySnapshot.forEach((doc) => {
          const userData = doc.data().burned as FirebaseUser;
          totalBurned += userData.weeks[currentWeek]?.burned || 0;

          setNotes(totalBurned);
          console.log(totalBurned);
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
    notes,
    setNotes,
  };
};
