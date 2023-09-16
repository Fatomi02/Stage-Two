import React, { useEffect, useState } from "react";
import "./movie.css";


const Movie = () => {
    let img_path="https://image.tmdb.org/t/p/w500"
    const data = JSON.parse(localStorage.getItem("movie-data"))
    console.log(data)

    const [releaseDate, setReleaseDate] = useState("");
    const [utcDate, setUtcDate] = useState("");

    useEffect(() => {
        if (data) {
          //function to get release date in UTC
          const getUTCTime = () => {
            setReleaseDate(data.release_date);
            const dates = releaseDate.split("-");
    
            if (dates.length === 3) {
              const year = parseInt(dates[0]);
              const month = parseInt(dates[1] - 1);
              const day = parseInt(dates[2]);
    
              const date = new Date(Date.UTC(year, month, day));
    
              setUtcDate(date.toISOString());
            }
          };
    
          //call function
          getUTCTime();
        }
      }, [data, releaseDate]);

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
        {utcDate}
        </div>
        <div className="runtime" data-testid="movie-runtime">
        {data?.runtime}
        </div>
        <div className="overview" data-testid="movie-overview">
            <p>{data?.overview}</p>
        </div>
       </div>
 
    </>
    )
} 

export default Movie;
