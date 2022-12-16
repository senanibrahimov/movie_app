import React, { useState } from "react";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeListAction } from "../../../Redux/Actions/removelistAction";
import "./ListMovie.css";

export function ListMovie({item}) {
  let [colored, setColored] = useState(false)
  const dispatch = useDispatch()

  const handleHeartColor =()=>{
    setColored(!colored);
  }

  return (
    <div className="ListMovie">
      <div className="item ">
        
          <div className="movie-poster">
            <img src={item.poster} alt="poster"></img>
          </div>

        <div className="movie-info">
            <div className="movie-name ">
              <p className="name">{item.movieTitle} </p>
              <p className="year"> {item.movieYear} </p>
            </div>
            <div className="del-heart" onClick={handleHeartColor}  style={{color: colored ? 'red' : 'rgb(192, 188, 188)'}}>
              <HeartFill />
            </div>
        </div>
      </div>
    </div>
  );
}
