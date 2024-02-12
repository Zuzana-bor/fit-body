import { Paper, Stack } from '@mui/material';
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
      const docRef = doc(db, 'users', 'likePlan');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('liky jsou', docSnap.data());
        setLikePlan(docSnap.data().likePlan || []);
      } else {
        console.log('nic není likované');
      }
    };

    fetchData();
  }, [setLikePlan]);

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
      <Typography>
        <FavTrainings />
        {user?.likePlan}
      </Typography>
      <Typography>tvé oblíbené cviky</Typography>
      <Typography>tvé fotky</Typography>
    </Stack>
  );
};

export default Profile;
