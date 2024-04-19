import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import app from '../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Protected from './components/Protected';

function App() {
  const[userAuth, setUserAuth] = useState(null);
  const auth = getAuth(app);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if (user){
            setUserAuth(user.email);
            console.log(user);
        }else{
            console.log("Favor de volverse a autenticar");
        }
    });
}, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
       <Route element={<Protected isActive={!userAuth}/>}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
       </Route>
      </Routes>
    </>
  )
}

export default App
