import axios from '../axios/axios';
import React, { useEffect, useState } from 'react'
import request from '../axios/request';
import "../Components/Banner.css"



function Banner() {

    const [movie,setmovie] = useState([]);

    useEffect(()=>{
        async function fetchbanner(){
            const requests = await axios.get(request.fetchNetflixOriginals)
            console.log(requests.data.results);
            setmovie(
                requests.data.results[
                    Math.floor(Math.random() * requests.data.results.length -1)
                ]
            );
            
            return requests; 
            }
            fetchbanner();
        },[]);
        console.log(movie);

        function truncate(str,n){
            return str?.length > n? str.substr(0,n-1) + "..." : str;
        }

    const baseline ="https://image.tmdb.org/t/p/original/";
    return (
        <header className="Banner"
        style={{
            backgroundSize:"cover",
            backgroundImage :`url("${baseline}${movie?.backdrop_path}")`,
            backgroundPosition : "center center",
        }}
        >
            <div className="Banner-content">
                <h1 className="Banner_title">
                    {movie?.title || movie?.name || movie?.orginal_name}
                </h1>
                <button className="Banner_button">Play</button>
                <button className="Banner_button">My List</button>
                <h2 className="banner_description">{truncate(movie?.overview,100)}</h2>
            </div>
            <div className="bottom-fade"/>


        </header>
    )
}

export default Banner
