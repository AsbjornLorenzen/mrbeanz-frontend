import logo from './logo.svg';
import './App.css';
import TextComponent from './components/RenderText';
import HomePage from './components/Homepage'
import NavBar from './components/Navigation'
import LoginScreen from './components/LoginScreen'
import React, { useState } from 'react';
import SearchAndTextBox from './components/QueryScreen';
import RatingForm from './components/RatingScreen'

function App() {
  const [currentScreen, setCurrentScreen]  = useState('home');
  const [loggedIn, setLoggedIn] = useState('');
  const coffeeid = 1234;

  const navigateTo = (screen) => {
    console.log(screen)
    setCurrentScreen(screen);
    renderScreen();
  }

  const renderScreen = () => {
    console.log('RENDERING ', currentScreen)
    switch (currentScreen) {
      case 'home':
        return <HomePage navigateTo={navigateTo} loggedIn={loggedIn}/>;
      case 'login':
        return <LoginScreen setLoggedIn={setLoggedIn} navigateTo={navigateTo}/>;
      case 'find':
        // NOT IMPLEMENTED YET
        return <SearchAndTextBox />;
      case 'rate':
        return <RatingForm />
      default:
        console.log('Case DEFAULT')
        return null;
    }
  };

  return (
    <div className="App">
      <NavBar navigateTo={navigateTo} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <div>{renderScreen()}</div>
    </div>
  );
}

export default App;
