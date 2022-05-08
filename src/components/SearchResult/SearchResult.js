import React from "react";
import "./SearchResult.css";
import { useStateValue } from "../../StateProvider";
import { useGoogleSearch } from "../../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchResult() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className="searchResult">
      <div className="resultheader">
        <Link to="/">
          <img
            className="logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google logo"
          />{" "}
        </Link>
        <div className="hb">
          <Search hideButtons />
          <div className="options">
            <div className="left">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>{" "}
              {/* option */}
              <div className="option">
                <DescriptionIcon />
                <Link to="/news">news</Link>
              </div>{" "}
              {/* option */}
              <div className="option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>{" "}
              {/* option */}
              <div className="option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>{" "}
              {/* option */}
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>{" "}
              {/* option */}
            </div>{" "}
            {/* left */}
            <div className="right">
              <div className="option">
                <Link to="/settings">settings</Link>
              </div>{" "}
              {/* option */}
              <div className="option">
                <Link to="/tools">tools</Link>
              </div>{" "}
              {/* option */}
            </div>{" "}
            {/* right */}
          </div>
        </div>
      </div>

      {term && (<div className="results">
        <p className="countR">
          About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>
        {data?.items.map((item) => (
          <div className="result">
            <a href={item.link}>    
                {item.diplayLink}
            </a>
            <a href={item.link}>
              <h2 className="resultTitle">{item.title}</h2>
            </a>
            <a href={item.link}>
              <p className="resultSnippet">{item.snippet}</p>
            </a>
          </div>
        ))}
        </div>)}
    </div>
  );
}

export default SearchResult;
