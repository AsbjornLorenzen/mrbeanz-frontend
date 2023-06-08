import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from '@mui/material';

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const LogoImage = styled('img')({
  width: 600,
  height: 200,
  marginBottom: (theme) => theme.spacing(4),
});

const TitleTypography = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const HomePage = ( props ) => {
  const { navigateTo, loggedIn } = props;
  return (
    <RootContainer>
      <LogoImage src="../mrbeanz_logo.png" />
      <TitleTypography variant="h4">
        Welcome to MrBeanz xD!
      </TitleTypography>
      <Typography variant="body1" align="center">
        Discover and rate the best coffee.
      </Typography>
      {loggedIn == '' ? <Button variant="contained" color="primary" onClick={() => navigateTo('login')}>
        Login
      </Button> : null}
    </RootContainer>
  );
};

export default HomePage;