import React, { useState, useEffect } from "react";
import axios from "axios";
import Axios from "../api/Axio";
import "./css/row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const img_url = "https://image.tmdb.org/t/p/original";

const Row = (prop) => {
  // currentdata and updated data
  const [Movie, setMovie] = useState([]);
  const[Trailer,setTrailer]=useState('');
  useEffect(() => {
    const fetchData = async () => {
      // concatenating base url of img and proped url from app.jsx
      const request = await axios.get(Axios + prop.Url);
      // passing url data to usestate
      setMovie(request.data.results);
      return request;
    };
    // calling fat arrow function in async manner
    fetchData();
  }, [prop.Url]);
  // console.log(Movie);
  const inc="img_large";
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick=(movie)=>{
    if(Trailer){
      setTrailer('');
    }else{
      movieTrailer(movie?.name)
      .then(url=>{
        const urlparameters=new URLSearchParams(new URL(url).search);
        // console.log(url);
        setTrailer(urlparameters.get('v'));
      }).catch(error=>console.error(error));
      // console.log(movie.name)
    }
  }
  return (
    <>
      <div className="Items">
        <h2>{prop.title}</h2>

        <div className="movie_flex">
          {/* getting multiple images using usestate and useeffect*/}
          {Movie?.map((val) => {
            return (
              <>
                <img
                key={val.id}
                onClick={()=>{handleClick(val)}}
                // if row contain attribute of large_img then do poster_path else backdrop_path
                  src={`${img_url}${prop.large_img ? val.poster_path:val.backdrop_path}`}
                  height={"150px"}
                //  if row contain attribute of large_img then add classname inc{img_large} else nothing
                  alt="invalid" className={`${prop.large_img?inc:''}`}
                />
              </>
            );
          })}
        </div>
       
      </div>
      {Trailer && <YouTube videoId={Trailer} opts={opts} />}
    </>
  );
};
export default Row;
