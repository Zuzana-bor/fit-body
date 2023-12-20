import * as React from 'react';
import Typography from '@mui/material/Typography';

type KclCardProps = {
  kcl: number;
};

const KclCard: React.FC<KclCardProps> = ({ kcl }) => {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        Tvůj denní příjem kalorií by měl být
      </Typography>
      <Typography variant="h2" align="center">
        {kcl} kcal
      </Typography>
    </>
  );
};

export default KclCard;
