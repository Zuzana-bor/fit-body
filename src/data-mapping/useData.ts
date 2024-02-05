import { useEffect, useState } from 'react';
import { ApiUrls, FirebaseUser, NotesData, initialNotes } from '../config';
import { Exercise } from '../data/exercises';
import { getTrainings } from './trainings';
import { TrainingsData } from '../data/trainings';
import { TrainingPlan } from '../data/trainingsPlans';
import { fetchApiData } from './utils';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../store/firebase';
import { collection, getDocs } from 'firebase/firestore';

const useData = () => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>();
  const [trainingsData, setTrainingsData] = useState<TrainingsData>();
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>();
  const [user, setUser] = useState<FirebaseUser | undefined>();
  const [notes, setNotes] = useState<NotesData | undefined>(initialNotes);

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
        });

        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
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

export default useData;
