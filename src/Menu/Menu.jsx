import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

const Menu = () => {
  return (
    <>
      <header>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',

            typography: 'body1',
            '& > :not(style) ~ :not(style)': {
              ml: 2,
            },
          }}
          onClick={preventDefault}
        >
          <Link href="#" underline="hover">
            <NavLink to="/">Home</NavLink>
          </Link>
          <NavLink to="/tranings" underline="hover">
            Tréninkové plány
          </NavLink>
          <NavLink to="/exercises" underline="hover">
            Databáze cviků
          </NavLink>
          <NavLink to="/form" underline="hover">
            Dotazník
          </NavLink>
        </Box>
      </header>
    </>
  );
};

export default Menu;
