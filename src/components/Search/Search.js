import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Search({ hideButtons = false }) {

  const [{}, dispatch] = useStateValue()

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log("searching...");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });


    navigate("/search");
  };

  return (
    <form className="search">
      <div className="searchInput">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <button type="submit" onClick={search} variant="outlined">
            Google Search
          </button>
          <button variant="outlined">I am feeling Lucky</button>
        </div>
      ) : (
        <div className="search_buttons">
          <button type="submit"  className="search_buttonsHidden" onClick={search} variant="outlined">
            Google Search
          </button>
          <button className="search_buttonsHidden" variant="outlined">I am feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
