import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from './Components/Header';
import Home from "./Components/Home";
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
          <Header/>
            <h1>Login</h1>
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
