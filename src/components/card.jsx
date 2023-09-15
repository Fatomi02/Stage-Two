import React from "react";
import "./card.css";

const Card = ({movie, onClick}) => {
    let img_path="https://image.tmdb.org/t/p/w500"
    return (
        <>
    <div onClick={onClick} className="MovieContainer" data-testid="movie-card">
        <div className="MovieBox">
            <div className="img" data-testid="movie-poster">
            <img src={img_path+movie?.poster_path} alt="" />
            </div>
            <div className="text">
            <span className="time" data-testid="movie-release-date">{movie?.release_date}</span>
            <div data-testid="movie-title"><h3>{movie?.title}</h3></div>
                
                <label className="rate2">Rating: {movie?.vote_average} / 10</label>
                <span> 🍎  {movie?.vote_count}</span>
            </div>
        </div>
    </div>
        </>
    )
}

export default Card;