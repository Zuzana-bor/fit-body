import * as React from 'react';
import Typography from '@mui/material/Typography';

type SleepCardProps = {
  sleepInfo: string;
};

const SleepCard: React.FC<SleepCardProps> = ({ sleepInfo }) => {
  return (
    <>
      <Typography variant="body1" color="text.primary">
        Jak na zdravý spánek
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {sleepInfo}
      </Typography>
    </>
  );
};

export default SleepCard;
