import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Search from "../Search/Search";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="leftHeader">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="rightHeader">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="homeBody">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="inputContainer">
            <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
