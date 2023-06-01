import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import {userLogin} from '../utils/api.js'

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  marginBottom: theme.spacing(2),
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const LoginScreen = ( props ) => {
  const { setLoggedIn, navigateTo } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = {username: username, password: password}
    const res = await userLogin(credentials).then(res => {
        console.log('Res: ',res)
        if (res.success == true) {
            console.log('Login!')
            setLoggedIn(res.username)
            navigateTo('home')
        } else {
            setShowError(true);
        }
    })
  };

  const handleCloseError = () => {
    setShowError(false); // Close error popup
  };

  return (
    <StyledContainer>
      <Dialog open={showError} onClose={handleCloseError}>
        <DialogTitle>Login Failed</DialogTitle>
        <DialogContent>
          <p>Invalid username or password.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseError} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <StyledTitle variant="h4">Login</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
        <StyledSubmitButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </StyledSubmitButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default LoginScreen;