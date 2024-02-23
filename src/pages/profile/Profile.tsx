import { Container, Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';
import React, { useEffect } from 'react';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { getISOWeek } from 'date-fns';
import { AppContext } from '../../store/AppContext ';
import { FirebaseUser } from '../../config';
import { auth, db } from '../../store/firebase';
import FavTrainings from './FavTrainings';
import BurnnedKcl from './BurnedKcl';
import FavExercises from './FavExercises';

const Profile = () => {
  const { user, setNotes, setLikePlan, setLikeExercise, name } =
    React.useContext(AppContext);
  const getCurrentWeekNumber = (): number => {
    const currentDate = new Date();
    return getISOWeek(currentDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentWeek = getCurrentWeekNumber();
      if (typeof currentWeek !== 'number' || isNaN(currentWeek)) {
        console.error(
          'getCurrentWeekNumber() did not return a valid week number.',
        );
        return;
      }

      const user = auth.currentUser;
      if (!user) return;

      const userId = user.uid;

      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('uid', '==', userId)),
      );

      let totalBurned = 0;
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as FirebaseUser;
        if (userData.weeks && Array.isArray(userData.weeks)) {
          userData.weeks.forEach((week) => {
            if (week.weekNumber === currentWeek) {
              totalBurned += week.burned || 0;
            }
          });
        }
      });

      setNotes(totalBurned);
    };

    fetchData();
  }, [setNotes]);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userId = user.uid;

      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('uid', '==', userId)),
      );

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData) {
          setLikePlan((prevLikePlan) => {
            const existingLikePlan = userData.likePlan || [];
            return [...prevLikePlan, ...existingLikePlan];
          });
          setLikeExercise((prevLikeExercise) => {
            const existingLikeExercise = userData.likeExercise || [];
            return [...prevLikeExercise, ...existingLikeExercise];
          });
        }
      });
    };

    fetchData();
  }, [setLikeExercise, setLikePlan]);

  return (
    <Container
      sx={{ bgcolor: '#e8f5e9', minWidth: '100vw', minHeight: '100vh' }}
    >
      <Typography level="h1" textAlign={'center'} pt={10}>
        Ahoj {user?.displayName ? user?.displayName : name}
      </Typography>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} p={3}>
        <BurnnedKcl />

        <FavTrainings />

        <FavExercises />

        <Typography>tvé fotky</Typography>
      </Stack>
    </Container>
  );
};

export default Profile;
