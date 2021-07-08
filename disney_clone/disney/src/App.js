import './App.css';
import react from "react"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Details from './Components/Details';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Details">
              <Details />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
 
export default App;
