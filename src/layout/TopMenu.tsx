import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Pages, Urls } from '../config';
import { Link as RouterLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {(Object.entries(Pages) as [keyof typeof Urls, string][]).map(
              ([url, name]) => (
                <Button
                  component={RouterLink}
                  to={Urls[url]}
                  key={url}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {name}
                </Button>
              ),
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopMenu;
