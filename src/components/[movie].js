import React from "react";
import "./movie.css";


const Movie = () => {
    let img_path="https://image.tmdb.org/t/p/w500"
    const data = JSON.parse(localStorage.getItem("movie-data"))
    console.log(data)

    return (
    <>
       <div className="movie-poster">
       <div className="img2">
            <img src={img_path+data?.poster_path} alt="" />
        </div>
        <div className="title" data-testid="movie-title">
            <h2>{data?.title}</h2>
        </div>
        <div className="released-date" data-testid="movie-release-date">
            {data?.release_date}
        </div>
        <div className="runtime" data-testid="movie-runtime">

        </div>
        <div className="overview" data-testid="movie-overview">
            <p>{data?.overview}</p>
        </div>
       </div>
 
    </>
    )
} 

export default Movie;