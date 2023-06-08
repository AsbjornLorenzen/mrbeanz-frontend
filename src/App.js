import logo from './logo.svg';
import './App.css';
import TextComponent from './components/RenderText';
import HomePage from './components/Homepage'
import NavBar from './components/Navigation'
import LoginScreen from './components/LoginScreen'
import React, { useState } from 'react';
import SearchAndTextBox from './components/QueryScreen';
import RatingForm from './components/RatingScreen'
import QueryBox from './components/QueryWithOptionsScreen';
import { Snackbar, SnackbarContent }  from '@mui/material';

function App() {
  const [currentScreen, setCurrentScreen]  = useState('home');
  const [loggedIn, setLoggedIn] = useState('');
  const [currentCoffeeId, setCurrentCoffeeId] = useState(1234);
  const [open, setOpen] = useState(false);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    renderScreen();
  }

  const onClose = () => {
    setOpen(false)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomePage navigateTo={navigateTo} loggedIn={loggedIn}/>;
      case 'login':
        return <LoginScreen setLoggedIn={setLoggedIn} navigateTo={navigateTo}/>;
      case 'find':
        return <SearchAndTextBox setCurrentCoffee={setCurrentCoffeeId} navigateTo={navigateTo} />;
      case 'rate':
        return <RatingForm coffeeid={currentCoffeeId} userid={loggedIn} navigateTo={navigateTo} setOpen={setOpen} />
      case 'browse':
        return <QueryBox navigateTo={navigateTo} setCurrentCoffee={setCurrentCoffeeId} />
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <SnackbarContent message="Successfully submitted rating" />
      </Snackbar>
      <NavBar navigateTo={navigateTo} setLoggedIn={setLoggedIn} loggedIn={loggedIn} open={open} setOpen={setOpen} />
      <div>{renderScreen()}</div>
    </div>
  );
}

export default App;
