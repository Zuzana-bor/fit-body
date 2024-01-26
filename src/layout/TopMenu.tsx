import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Pages, Urls } from '../config';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const TopMenu = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const [state, setState] = React.useState({ left: false });
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const toggleDrawer =
    (anchor: 'left', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleOpenLoginDialog = () => {
    setLoginDialogOpen(true);
  };

  const handleCloseLoginDialog = () => {
    setLoginDialogOpen(false);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          {isMatch === false ? (
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
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                color="primary"
                onClick={handleOpenLoginDialog}
              >
                Přihlášení
              </Button>

              <LoginForm
                open={loginDialogOpen}
                onClose={handleCloseLoginDialog}
              />

              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                color="primary"
                onClick={handleOpenLoginDialog}
              >
                Registrace
              </Button>

              <RegistrationForm
                open={loginDialogOpen}
                onClose={handleCloseLoginDialog}
              />
            </Box>
          ) : (
            <div>
              <React.Fragment>
                <IconButton onClick={toggleDrawer('left', true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                >
                  <List>
                    {(
                      Object.entries(Pages) as [keyof typeof Urls, string][]
                    ).map(([url, name]) => (
                      <ListItemButton
                        component={RouterLink}
                        to={Urls[url]}
                        key={url}
                      >
                        {name}
                      </ListItemButton>
                    ))}
                  </List>
                </Drawer>
              </React.Fragment>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopMenu;
