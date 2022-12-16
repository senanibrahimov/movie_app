import React, { useState } from "react";
import "./SearchList.css";
import { ListMovie } from "../MoviePage/ListMovie/ListMovie";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";

export function SearchList() {
  let [listName, setListName] = useState('');
  const addedMovies = useSelector((state) => state.add.movies);

  const saveList =()=>{
    var list_text =listName;
    {addedMovies !== undefined && !!addedMovies.length &&
      addedMovies.map((item, index) => {
        return (
          item.movieTitle !== "" &&
          item.poster !== "" && 
            (list_text = list_text+ '\nMovie ID: '+item.movieID + '\nMovie: '+item.movieTitle+'\nPoster:' +item.poster+ '\nMovie Year: '+item.movieYear+'\n')
        );
      })}
    var blob = new Blob([list_text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "MovieList.txt");
    alert('List is saved');
  }

  const handleChange=(e)=>{
    setListName(e.target.value)
  }

  return (
    <div className="SearchList">
      <div className="saving-area">
        <input 
          value={listName}
          onChange={handleChange}
          type="text"
          className="name-area"
          name="name-area"
          placeholder="Siyahı adını daxil edin"
        />
        <button className="save" onClick={saveList} disabled={!listName}>Saxla</button>
      </div>
      <div className="list-area">
        <ul className="list">
          {addedMovies !== undefined &&
            !!addedMovies.length &&
            addedMovies.map((item, index) => {
              return (
                item.movieTitle !== "" &&
                item.poster !== "" && (
                  <li className="list-item" key={index}>
                    <ListMovie item={item} />
                  </li>
                )
              );
            })}
        </ul>
      </div>
    </div>
  );
}