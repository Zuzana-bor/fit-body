import * as React from 'react';
import Typography from '@mui/material/Typography';

type SleepCardProps = {
  sleepTime: string;
};

const SleepCard: React.FC<SleepCardProps> = ({ sleepTime }) => {
  return (
    <>
      <Typography variant="body1" color="text.primary">
        Jak na zdravý spánek
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {sleepTime}
      </Typography>
    </>
  );
};

export default SleepCard;
