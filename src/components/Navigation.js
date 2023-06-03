import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  marginBottom: (theme) => theme.spacing(2),
});

const TitleTypography = styled(Typography)({
  flexGrow: 1,
  marginRight: (theme) => theme.spacing(4),
});

const NavBar = ( props ) => {
  const { navigateTo, setLoggedIn, loggedIn } = props;
  
  const loginButton = () => {
    return (
        <Button color="inherit" onClick={() => navigateTo('login')}>
        Login
      </Button>
    )
  }
  
  const logoutButton = () => {
    return (
      <Button color="inherit" onClick={() => setLoggedIn('')}>
        Log out
      </Button>
    )
  }

  return (
    <StyledAppBar position="static" >
      <Toolbar>
        <TitleTypography variant="h6" >
          Mr Beanz
        </TitleTypography>
        <TitleTypography variant="h6" >
          Welcome, {loggedIn}!
        </TitleTypography>
        <Button color="inherit" onClick={() => navigateTo('home')}>
          Home
        </Button>
        {(loggedIn == '') ? loginButton() : logoutButton()}
        <Button color="inherit" onClick={() => navigateTo('rate')}>
          Find
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;