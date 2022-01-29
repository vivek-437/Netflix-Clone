import React, { useState, useEffect } from "react";
import axios from "axios";
import Axios from "../../api/Axio";
import request from "../../api/Requests";
import "../css/header.css";
// const img_url = "https://image.tmdb.org/t/p/original";

const Header = () => {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(Axios + request.fetchTrending);
      setMovie(
        // getting single result
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return;
    };
    fetchData();
  }, []);
  const wrap=(str,n)=>{
    return str?.length > n?str.substr(0,n-1)+"...":str;
  }
  return (
    <>
      <div className="main_poster">
        <header
          className="poster"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${Movie?.backdrop_path}') `,
            backgroundSize: "cover",backgroundPosition:"center center",
          }}
        >
          <div className="poster_content">
            <h1>{Movie.title}</h1>
            <div className="poster_button">
              <button>play</button>
              <button>my list</button>
            </div>
            <h1 className="description">{wrap(Movie?.overview,150)}</h1>
          </div>
          <div className="fade"></div>
        </header>
        
      </div>
    
    </>
  );
};

export default Header;
