import React, { useState, useEffect }  from "react";
import "./main"
import "./mainstyle.css"
import Card from "./card"
import { Link, useNavigate } from "react-router-dom";
import SinglePage from "../singlePage";

let tmdbKey = "&api_key=db95773a7fb212ba790d71f6adac0e7e";
let tmdbBaseUrl = 'https://api.themoviedb.org/3';

let url = tmdbBaseUrl+"/discover/movie?sort_by=popularity.desc"+tmdbKey;

let arr=["Popular","Theatre","Kids","Drama","Comedie"]



const Main = () => {
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);
    const [search,setSearch]= useState();
    const navigate = useNavigate();


    useEffect(()=> {
        fetch(url_set).then(res=> res.json()).then(data=> {
            // console.log(data.results);
            setData(data.results);
        })
    }, [url_set])


    const handleOnClick = (res,pos) => {
        localStorage.setItem("movie-data", JSON.stringify(res))
        navigate(`/movie/${pos}`)
    }

    const getData=(movieType)=>{
        if(movieType=="Popular")
        {
            url=tmdbBaseUrl+"/discover/movie?sort_by=popularity.desc"+tmdbKey;
        }
        if(movieType=="Theatre")
        {
            url=tmdbBaseUrl+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+tmdbKey;
        }
        if(movieType=="Kids")
        {
            url=tmdbBaseUrl+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+tmdbKey;
        }
        if(movieType=="Drama")
        {
            url=tmdbBaseUrl+"/discover/movie?with_genres=18&primary_release_year=2014"+tmdbKey;
        }
        if(movieType=="Comedie")
        {
            url=tmdbBaseUrl+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+tmdbKey;
        }

        setUrl(url);

    }

    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=tmdbBaseUrl+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return (
        <>
        <header>
            <div className="flexSB container">
                <nav className="flexSB">
                    <div className="logo">
                        <h1>Movie Box</h1>
                    </div>
                </nav>
                <div className="nav-link">
                    <ul>
                    {
                        arr.map((value,pos)=>{
                            return(
                                <li><a href="#" key={pos} name={value} onClick={(e)=>{ getData(e.target.name)}}>{value}</a></li>
                            )
                        })
                    }
                    </ul>
                </div>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" value={search} onChange={(e)=>{setSearch(e.target.value)}}  onKeyDown={searchMovie} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="account flexSB">
                <button className="toggle">
                    <a href="">Sign In</a>
                    </button>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
        

    <div className="box">
            <div className="coverImage">
                <img src="https://www.tapeteos.pl/data/media/1267/big/john_wick_3__2019__john_wick_chapter_3_-_parabellum_003_keanu_reeves_jako_john_wick.jpg" alt="John Wick" />
            </div>
            <div className="content flex">
                <div className="details row">
                <h1>John Wick 3 : Parabellum</h1>
            <div className="rating flex">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>
        <label className="rate">86.0 / 100</label>
            <span> 🍎  97%</span>
        </div>
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <button className="primary-btn">
            <i className="fa fa-play"></i> WATCH TRAILER
        </button>
        </div>
    </div>

    <div className="section-card">
        <div className="heading flexSB">
            <h2>See Results</h2>
            <a href="">See More</a>
        </div>
        <div className="MovieContainer">

            {
               
                (movieData.length == 0)? <p className="notfound">Not Found</p>: movieData.splice(0, 10).map((res,pos)=>{
                    return (
                        <Card onClick={() => handleOnClick(res,pos)}  movie={res} key={pos} />
   
                    )
                })
            }
        </div>
        
    </div>


<div className="footer">
    <footer id="footer">
    <div class="last">
        <a class="footer-icon" target="_blank" href="https://web.facebook.com/Horlaite.plan" role="button"><i class="fab fa-facebook-f fa-lg"></i></a>
        <a class="footer-icon" target="_blank" href="https://www.instagram.com/hor_laite/" role="button"><i class="fab fa-instagram fa-lg"></i></a>
        <a class="footer-icon" target="_blank" href="https://twitter.com/horlaite_1" role="button"><i class="fab fa-twitter fa-lg"></i></a>
        <a  class="footer-icon" target="_blank" href="https://www.google.com/" role="button"><i class="fab fa-google fa-lg"></i></a>
    </div>

    <div className="copyright">
    <p><em>© Copyright 2023 Olaitan Fatomi</em></p>
    </div>
       
    </footer>
</div>
  
</>
    )
}


export default Main
