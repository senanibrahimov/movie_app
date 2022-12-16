import React, { useEffect, useState } from 'react';
import './OpenedMovie.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export function OpenedMovie(props){
   const data= useSelector(state=>state.add.movies)
   const [movie,setMovie]=useState('')
   let {id}= useParams()


   useEffect(()=>{
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=d7ad9ce`)
     .then(response=>response.json())
     .then(data=>setMovie(data))
     console.log(movie)
   },[])
    return(
        <div className='OpenedMovie'>
            <div className='photo'>
                <img src={movie.Poster} alt='poster'></img>
            </div>
            <div className='info'>
                <p className='movie-name'>Ad: {movie.title}</p>
                <p className='imdb-rate'>IMDB: {movie.imdbRating}</p>
                <p className='actors'>Aktyorlar: {movie.Actors}</p>
                <p className='director'>Rejissor : {movie.Director}</p>
                <p className='category'>Kateqoriya: {movie.Genre}</p>
                <p className='lang'>Dil: {movie.Language}</p>
                <p className='release'>Nümayiş tarixi: {movie.Released}</p>
                <p className='time'>Vaxt: {movie.Runtime}</p>
            </div>
        </div>
    );
}