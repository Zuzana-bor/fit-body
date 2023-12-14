import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Urls } from '../../config';
import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { FC } from 'react';
import { ResultingTrainingPart } from './utils';

type PlanCardProps = {
  training: ResultingTrainingPart[];
};

const PlanCard: FC<PlanCardProps> = ({ training }) => {
  return (
    <>
      Tvůj tréninkový plán
      <Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 70 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Den</TableCell>
                <TableCell align="right">Trénink</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {training.map((row) => (
                <TableRow
                  key={row.day}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`${Urls.Plans}#${kebabCase(row.training)}`}>
                      {row.training}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Typography>
    </>
  );
};

export default PlanCard;
