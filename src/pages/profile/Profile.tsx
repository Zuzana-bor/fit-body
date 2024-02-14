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

const Profile = () => {
  const { user, setNotes, setLikePlan } = React.useContext(AppContext);
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
        query(
          collection(db, 'users'),
          where('uid', '==', userId),
          where(`weeks.${currentWeek}.burned`, '>', 0),
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
