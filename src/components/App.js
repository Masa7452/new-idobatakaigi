import React, { useState } from 'react';
import config from '../config.json';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';

function App() {
  const [name, setName] = useState('');
  if(config.SignInEnabled && name === ""){
    return <SignIn setName={setName} />;
  }else{
    return <Main name={name}/>
  }
}

export default App;
