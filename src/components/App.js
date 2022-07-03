import React, { useState, useEffect, createContext } from 'react';
import { query, orderByKey, limitToLast, onValue } from 'firebase/database';
import { messageRef } from '../firebase';
import './App.css';
import SignIn from './SignIn';
import Main from './Main';
import { Route, Routes } from 'react-router';
import MessageDetail from './MessageDetail';

export const MessagesContext = createContext();

function App() {

  const [name, setName] = useState('');

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const recentMessageRef = query(
        messageRef,
        orderByKey('messages'),
        limitToLast(15)
    );
    onValue(recentMessageRef, (snapshot) => {
        const messages = snapshot.val();

        if(messages === null){
            setMessages([]);
            return;
        }

        const newEntries = Object.entries(messages);
        const newMessages = newEntries.map((entry) => {
            const [key, nameAndText] = entry;
            return { key, ...nameAndText };
        })
        setMessages(newMessages);
    });
  }, [])

  if(name === ""){
    return <SignIn setName={setName} />;
  }else{
    return (
      <MessagesContext.Provider value={{messages}}>
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
      </MessagesContext.Provider>
    )
  }
  
}

export default App;
