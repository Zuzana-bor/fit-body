import { Paper, Stack } from '@mui/material';
import Typography from '@mui/joy/Typography';
import React, { useEffect } from 'react';
import { AppContext } from '../store/AppContext ';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { FirebaseUser } from '../config';
import { db } from '../store/firebase';
import { getISOWeek } from 'date-fns';

const Profile = () => {
  const { user, notes, setNotes } = React.useContext(AppContext);
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
  }, []);

  return (
    <Stack m={4}>
      <Typography level="h1">Ahoj {user?.displayName},</Typography>
      <Paper>
        <Typography>
          {notes
            ? `tento týden jsi spálila ${notes} kcl`
            : 'No notes available'}
        </Typography>
      </Paper>
      <Typography>tvé oblíbené tréninky</Typography>
      <Typography>tvé oblíbené cviky</Typography>
      <Typography>tvé fotky</Typography>
    </Stack>
  );
};

export default Profile;
