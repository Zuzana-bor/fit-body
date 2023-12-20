import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { TrainingPlanDay } from '../../data/trainingsPlans';
import { Urls } from '../../config';

type PlanCardProps = {
  days: TrainingPlanDay[];
};

const PlanCard: FC<PlanCardProps> = ({ days }) => {
  return (
    <>
      <Typography
        component="div"
        variant="body1"
        color="text.primary"
        align="center"
      >
        Tvůj tréninkový plán
      </Typography>

      <TableContainer>
        <Table sx={{ minWidth: 70 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Den</TableCell>
              <TableCell align="center">Trénink</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {days.map((item) => (
              <TableRow
                key={item.day}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography component="div" variant="h6" align="center">
                    {item.day}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Link to={`${Urls.Plans}#${kebabCase(item.trainingId)}`}>
                    <Typography component="div" variant="h6" align="center">
                      {item.trainingId}
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PlanCard;
