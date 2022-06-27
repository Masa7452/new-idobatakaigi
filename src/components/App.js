import React, { useState } from 'react';
import config from '../config.json';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';
import { Route, Routes } from 'react-router';
import MessageDetail from './MessageDetail';

function App() {
  const [name, setName] = useState('');
  
  if(name === ""){
    return <SignIn setName={setName} />;
  }else{
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<SignIn setName={setName}/>}
          />
          <Route path="main" element={<Main name={name}/>} />
          <Route
              path="main/detail"
              element={<MessageDetail name={name} />}
          />
        </Routes>
      </div>
    )
  }
  
}

export default App;
