import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { kebabCase } from 'lodash';
import { Link } from 'react-router-dom';
import { Urls } from '../../config';
import { Training } from './utils';

type TrainingProps = {
  training: Training;
};

const TrainingTable: FC<TrainingProps> = ({ training }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cvik</TableCell>
            <TableCell align="right">Počet opakování/ sérií</TableCell>
            <TableCell align="right">Svalová partie</TableCell>
            <TableCell align="right">Jak na to</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {training.map(
            ({ number, exercise: { mainMuscleGroupe, media, name } }) => (
              <TableRow
                key={name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={`${Urls.Exercise}#${kebabCase(name)}`}>{name}</Link>
                </TableCell>
                <TableCell align="right">{number}</TableCell>
                <TableCell align="right">{mainMuscleGroupe}</TableCell>
                <TableCell align="right">
                  <CardMedia
                    sx={{ height: 100, objectFit: 'contain' }}
                    component="img"
                    image={media}
                    title={name}
                  />
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TrainingTable;
