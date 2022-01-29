import React from "react";
import Row from "./components/content/Row";
import requests from "./components/api/Requests";
import Header from "./components/content/header/Header";
import Navbar from "./components/content/navbar/Navbar";

// npm i react-youtube and npm i movie-trailer used
const App=()=> {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="main-container">
      <Row title="NETFLIX ORIGINALS" Url={requests.fetchNetflixOriginals} large_img/>
      <Row title="Trending now" Url={requests.fetchTrending}/>
      <Row title="Top Rated" Url={requests.fetchTopRated}/>
      <Row title="Action Movies" Url={requests.fetchActionMovies}/>
      <Row title="Horr Movies" Url={requests.fetchHorrMovies}/>
      <Row title="Romantic Movies" Url={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" Url={requests.fetchDocumentaries}/>
      </div>
    </>  
  );
}

export default App;
