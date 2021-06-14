import React, { useEffect, useState } from 'react'
import axios from "../axios/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title,fetchUrl,islargerow}) {

    const [movies,setmovies] = useState([])
    const [trailerUrl,settrailerUrl] = useState("")

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchdata();
    },[fetchUrl])

    const baseline ="https://image.tmdb.org/t/p/original/";

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
    //   when clicked on poster it returns its url by using movietrailer
       const handleclick =(movie)=>{
          if(trailerUrl){
              settrailerUrl("")
          }else{
              movieTrailer(movie?.name || "")
              .then(url=>{
                const urlParam = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParam.get("v"));
              })
              .catch(err => console.log(err));
          }

      }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {
                    movies.map((movie)=>{
                     return <img key={movie.id}
                      className={`poster ${islargerow && "largerposter"}`}
                      src={`${baseline}${islargerow ? movie.poster_path:movie.backdrop_path}`} 
                      alt={movie.name}
                      onClick={handleclick(movie)}
                      />
                    })
                }
            </div>
            {
                trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>
            }
            
        </div>
    )
}

export default Row
