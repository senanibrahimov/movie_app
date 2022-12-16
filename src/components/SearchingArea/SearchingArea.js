import React, { useState } from "react";
import { Movies } from "../MoviePage/Movies/Movies";
import { SearchList } from "../List/SearchList";
import { Clipboard2CheckFill } from "react-bootstrap-icons";
import "./SearchingArea.css";

export function SearchingArea() {
  let [visible, setVisible] = useState(false);
  let [result, setResult] = useState([]);
  let [input_value, setInputValue] = useState("");

  const handleMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${input_value}&apikey=d7ad9ce`)
      .then((response) => response.json())
      .then((data) => setResult(data.Search));
  };

  const showHide = (e) => {
    setVisible(!visible);
  };

  return (
    <div className="SearchingArea">
      <div className="area">
        <div className="search">
          <input
            name="search_input"
            value={input_value}
            onChange={(e) => setInputValue(e.target.value)}
            className="search_input"
            type="search"
            placeholder="Məsələn Harry Potter, Avengers..."
          />
          <button
            className="btn"
            onClick={handleMovies}
            disabled={!input_value}
          >
            Axtar
          </button>
          <button className="clipboard" onClick={showHide}>
            <Clipboard2CheckFill />
          </button>
          {visible ? <Movies movie={result} wdth={ '54rem'}/>: <Movies movie={result} wdth={ '75rem'}/>}
        </div>
      </div>
      {visible && <SearchList />}
    </div>
  );
}
