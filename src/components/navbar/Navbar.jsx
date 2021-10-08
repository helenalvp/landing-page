import React from "react";
import "./navbar.css";
import SearchBar from "../search-bar/SearchBar";

class Navbar extends React.Component {
  render() {
    //   this navbar is for styling purpouses only. so it will not be
    return (
      <nav>
        <ul className="py-2">
          <li>
            <a href="#home" className="nav-link nav-title">
              beauty
            </a>
          </li>
          <li>
            <a href="#brands" className="nav-link nav-item">
              Brands
            </a>
          </li>
          <li>
            <a href="#skincare" className="nav-link nav-item">
              Skincare
            </a>
          </li>
          <li>
            <a href="#body" className="nav-link nav-item">
              Body
            </a>
          </li>
          <li>
            <a href="#hair" className="nav-link nav-item">
              Hair
            </a>
          </li>
          <li>
            <a href="#nail" className="nav-link nav-item">
              Nails
            </a>
          </li>
          {/* <li className="">
            <SearchBar />
          </li> */}
          <li>
            <button
              className="nav-link nav-right btn btn-outline-dark mr-2"
              href="#login"
            >
              Log In
            </button>
          </li>
          <li>
            <a className="nav-link nav-right" href="#about">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
