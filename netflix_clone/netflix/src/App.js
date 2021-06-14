import react from "react";
import './App.css';
import db from "./Firebase";
import request from "./axios/request"
import Row from "./Components/Row"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl = {request.fetchNetflixOriginals} islargerow/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
      <Row title="Trending now" fetchUrl = {request.fetchTrending}/>
    </div>
  );
}

export default App;
