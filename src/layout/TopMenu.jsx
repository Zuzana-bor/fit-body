import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Pages, Urls } from '../config';
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
<<<<<<< HEAD:src/layout/TopMenu.jsx
=======
import Home from '../pages/home/Home';
>>>>>>> 8acf112 (opraveny chyby):src/layout/MyMenu.jsx

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

const TopMenu = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            style={{ textDecoration: 'none', color: 'white' }}
<<<<<<< HEAD:src/layout/TopMenu.jsx
            to="/"
=======
            to={Urls[Home]}
>>>>>>> 8acf112 (opraveny chyby):src/layout/MyMenu.jsx
          >
            HOME
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.entries(Pages).map(([url, name]) => (
              <Button
                component={RouterLink}
                to={Urls[url]}
                key={url}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopMenu;
