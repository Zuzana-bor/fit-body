import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router-dom/server';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Training, TrainingUrls } from '../config';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

const MenuPlans = () => {
  return (
    <>
      <Stack direction="row" my={8} spacing={2}>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
          <MenuList>
            {' '}
            <Stack direction="column">
              {Object.entries(Training).map(([url, name]) => (
                <Link component={RouterLink} to={TrainingUrls[url]} key={url}>
                  {name}
                </Link>
              ))}
            </Stack>
          </MenuList>
        </Paper>
      </Stack>
    </>
  );
};

export default MenuPlans;
