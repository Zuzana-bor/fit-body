import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { exercises } from '../../data/exercises';
import Plan from './Plan';
import { Container } from '@mui/material';

const Plans = () => {
  const { category } = useParams();

  const relatedExercises = exercises.filter(
    (item) => item.category.toLowerCase() === category,
  );
  console.log(relatedExercises);
  return (
    <Container sx={{ mb: 10 }}>
      <Stack direction="row" my={8} spacing={2}>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
          <MenuList>
            <MenuItem>
              <ListItemText>
                <Link
                  style={{ textDecoration: 'none', color: 'green' }}
                  to={'/plans/fullbody'}
                >
                  Full body
                </Link>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <Link
                  style={{ textDecoration: 'none', color: 'green' }}
                  to={'/plans/hornicasttela'}
                >
                  Horní část těla
                </Link>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <Link
                  style={{ textDecoration: 'none', color: 'green' }}
                  to={'/plans/dolnicasttela'}
                >
                  Dolní část těla
                </Link>
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <Link
                  style={{ textDecoration: 'none', color: 'green' }}
                  to={'/plans/kardio'}
                >
                  Kardio
                </Link>
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Stack>
      {relatedExercises.map((exercise) => (
        <Plan key={exercise.keys} exercise={exercise} />
      ))}
    </Container>
  );
};

export default Plans;
