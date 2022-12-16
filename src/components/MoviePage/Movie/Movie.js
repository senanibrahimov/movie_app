import React, { useState } from "react";
import { addListAction } from "../../../Redux/Actions/addlistAction";
import {  StarFill } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch} from "react-redux";
import "./Movie.css";
import { Link } from "react-router-dom";

export function Movie({ props }) {
  let [colored, setColored] = useState(false)
  const dispatch = useDispatch();

  const handleHeart =()=>{
    setColored(!colored);
  }

  return (
    
    <div className="Movie">
      <div className="movie-item ">
        <div className="heart" onClick={handleHeart} style={{color: colored ? 'red' : 'rgb(192, 188, 188)'}}>
          <HeartFill onClick={()=>dispatch(addListAction(props.imdbID, props.Title, props.Poster, props.Year, colored))}/>
        </div>
        <div className="poster">
          <img src={props.Poster} alt="poster"></img>
        </div>
        <Link to={`movie/${props.imdbID}`}>
        <div className="infos">
          <p className="imdb">
            <StarFill style={{ color: "rgb(255, 204, 0)" ,paddingRight:'5px' }} />
             {props.Year}
          </p>
          <p className="name">{props.Title}</p>
        </div>
        </Link>
      </div>
    </div>
    
  );
}
