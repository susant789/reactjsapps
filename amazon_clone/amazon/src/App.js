import './App.css';
import { BrowserRouter as Router,Switch,Link,Route } from "react-router-dom";
import Header from './Components/Header';

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
            <h1>Checkout</h1>
          </Route>
          <Route exact path="/">
            <Header/>
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
