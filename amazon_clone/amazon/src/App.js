import './App.css';
import React , { useEffect } from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './Components/Header';
import Home from "./Components/Home";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import {auth } from "./firebase";
import {useStateValue} from "./Components/StateProvider"


function App() {

  const [{user},dispatch] = useStateValue();
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(authuser=>{
      if(authuser){

        dispatch({
          type:"user",
          user:authuser,
        });
      }else{

        dispatch({
          type:"user",
          user:null,
        });
      }
    })
    return () => {
      unsubscribe();
    };
    
  },[]);

  console.log(user)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
          <Header/>
            <Login/>
          </Route>
          <Route exact path="/signOut">
          <Header/>
            <h1>SignOut</h1>
          </Route>
          <Route exact path="/Checkout">
          <Header/>
          <Checkout />
          </Route>
          <Route exact path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
