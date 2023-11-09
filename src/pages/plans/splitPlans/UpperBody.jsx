import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { exercises } from '../../../data/exercises';
import { Popper } from '@mui/base/Popper';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { groupBy } from 'lodash';

const UpperBody = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [current, setCurrent] = React.useState('');

  console.log(exercises);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setCurrent(event.target.innerText);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cvik</TableCell>
            <TableCell align="right">Počet opakování/ sérií</TableCell>
            <TableCell align="right">Svalová partie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercises.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TriggerButton
                  aria-describedby={id}
                  type="button"
                  onClick={handleClick}
                >
                  {row.name}
                </TriggerButton>

               
              </TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">{row.mainMuscleGroupe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UpperBody;

const blue = {
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
};

const TriggerButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === 'dark' ? blue[300] : blue[200]
    };
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);
