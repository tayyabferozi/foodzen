import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import { Link } from "react-router-dom";
import Search from "components/Search/Search";
import hamburger from "assets/images/hamburger.png";

function Navbar(props) {
  let { sidebarState } = props;
  let { sidebarShow, setSidebarShow } = sidebarState;

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <Logo />
      </Link>
      <Link to="/base-search">
        <Search focus={props.focus} />
      </Link>
      <img
        onClick={() => setSidebarShow(!sidebarShow)}
        src={hamburger}
        className="hamburger-icon"
        alt=""
      />
    </div>
  );
}

export default Navbar;
