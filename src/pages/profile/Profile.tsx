import { Container, Paper, Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';
import React, { useEffect } from 'react';
import {
  getDocs,
  query,
  collection,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getISOWeek } from 'date-fns';
import { AppContext } from '../../store/AppContext ';
import { FirebaseUser } from '../../config';
import { db } from '../../store/firebase';
import FavTrainings from './FavTrainings';
import BurnnedKcl from './BurnedKcl';

const Profile = () => {
  const { user, notes, setNotes, setLikePlan } = React.useContext(AppContext);
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
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where(`weeks.${currentWeek}.burned`, `>`, 0),
        ),
      );

      let totalBurned = 0;
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as FirebaseUser;
        if (userData.weeks[currentWeek]) {
          totalBurned += userData.weeks[currentWeek].burned || 0;
        }
        console.log('tolik spáleno', totalBurned);
        setNotes(totalBurned);
      });
    };

    fetchData();
  }, [setNotes]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('likePlan', '!=', [])),
      );
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData) {
          setLikePlan((prevLikePlan) => {
            const existingLikePlan = userData.likePlan || [];
            return [...prevLikePlan, ...existingLikePlan];
          });
          console.log(userData);
        }
      });
    };

    fetchData();
  }, [setLikePlan]);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography level="h1">Ahoj {user?.displayName}</Typography>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <BurnnedKcl />

        <FavTrainings />

        <Typography>tvé oblíbené cviky</Typography>
        <Typography>tvé fotky</Typography>
      </Stack>
    </Container>
  );
};

export default Profile;
