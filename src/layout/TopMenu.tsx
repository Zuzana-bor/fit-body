import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Pages, Urls, signOut } from '../config';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItemButton } from '@mui/material';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { AppContext } from '../store/AppContext ';

const TopMenu = () => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const [state, setState] = React.useState({ left: false });
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [registrationDialogOpen, setRegistrationDialogOpen] = useState(false);
  const { sign, user } = React.useContext(AppContext);

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

  const handleOpenRegistrationDialog = () => {
    setRegistrationDialogOpen(true);
  };

  const handleCloseRegistrationDialog = () => {
    setRegistrationDialogOpen(false);
  };

  const handleSignOut = () => {
    signOut();
    console.log('uživatel odhlášen');
  };

  console.log(user);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          {isMatch === false && (
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
              {user ? (
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  color="secondary"
                  onClick={handleSignOut}
                >
                  Odhlásit se
                </Button>
              ) : (
                <React.Fragment>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    color="secondary"
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
                    color="secondary"
                    onClick={handleOpenRegistrationDialog}
                  >
                    Registrace
                  </Button>
                  <RegistrationForm
                    open={registrationDialogOpen}
                    onClose={handleCloseRegistrationDialog}
                  />
                </React.Fragment>
              )}
            </Box>
          )}
          {isMatch && (
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
                  {(Object.entries(Pages) as [keyof typeof Urls, string][]).map(
                    ([url, name]) => (
                      <ListItemButton
                        component={RouterLink}
                        to={Urls[url]}
                        key={url}
                      >
                        {name}
                      </ListItemButton>
                    ),
                  )}
                </List>
                {!user && (
                  <React.Fragment>
                    <Button
                      sx={{ my: 2, display: 'block' }}
                      onClick={handleOpenLoginDialog}
                    >
                      Přihlášení
                    </Button>
                    <Button
                      sx={{ my: 2, display: 'block' }}
                      color="primary"
                      onClick={handleOpenRegistrationDialog}
                    >
                      Registrace
                    </Button>
                  </React.Fragment>
                )}
              </Drawer>
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopMenu;
