import { Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';
import React, { useEffect } from 'react';
import { AppContext } from '../../store/AppContext ';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { FirebaseUser } from '../../config';
import { db } from '../../store/firebase';
import { getISOWeek } from 'date-fns';
import BurnnedKcl from './BurnedKcl';
import FavTrainings from './FavTrainings';

const Profile = () => {
  const { user, setNotes } = React.useContext(AppContext);
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

        setNotes(totalBurned);
      });
    };

    fetchData();
  }, [setNotes]);

  return (
    <Stack m={4}>
      <Typography level="h1">Ahoj {user?.displayName},</Typography>
      <BurnnedKcl />
      <FavTrainings />

      <Typography>tvé oblíbené cviky</Typography>
      <Typography>tvé fotky</Typography>
    </Stack>
  );
};

export default Profile;
