import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile/>
        <h6>Made with ❤ in INDIA <br></br> By <a href = 'https://www.instagram.com/coder_purvesh/'>Coder-Purvesh</a> <br></br> <br></br><a href = 'https://github.com/purveshshende2'>Github</a></h6>
      </header>
    </div>
  );
}

export default App;
