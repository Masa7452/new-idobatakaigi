import React, { useState } from 'react';
import config from '../config.json';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';

function App() {
  const [nickName, setNickName] = useState('');
  if(config.SignInEnabled && nickName === ""){
    return <SignIn setNickName={setNickName} />;
  }else{
    return <Main />
  }
}

export default App;
