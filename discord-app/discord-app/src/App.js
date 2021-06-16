import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from "./Components/Chat"
import Login from './Components/Login';
import { selectUser } from './features/userSlice';
import  {auth} from "./Firebase"
import {login , logout } from "./features/userSlice"



function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    
  useEffect(()=>{
      auth.onAuthStateChanged((authUser)=>{
        console.log(authUser)
          if(authUser){
            dispatch(
              login({
                uid : authUser.uid,
                photo : authUser.photoURL,
                email : authUser.email,
                name : authUser.displayName
              })
            )
          }else{
            dispatch(logout())
          }
      })
    },[dispatch])


  return (
    <div className="app">
      {user ? 
        <>
          <Sidebar />
          <Chat />
        </>
       : 
        <Login />
      }    
    </div>
  );
}

export default App;
