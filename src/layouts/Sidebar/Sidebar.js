import React from "react";
import "./Sidebar.css";
import { ReactComponent as SearchIcon } from "assets/images/search-icon-2.svg";
import { Link } from "react-router-dom";

function Sidebar({ sidebarState }) {
  let { sidebarShow, setSidebarShow } = sidebarState;
  let sidebarRef = React.useRef();

  React.useEffect(() => {
    let handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setSidebarShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${
        sidebarShow ? "show" : ""
      } row column justify-between `}
    >
      <div>
        <Link to="/" className="sidebar-item shadow-bottom">
          <SearchIcon />
          <Link to="/search-page">
            <p className="fs-15px light-blue weight-7">Advance Search</p>
          </Link>
        </Link>
        <Link to="/" className="sidebar-item shadow-bottom"></Link>
      </div>
      <div to="/" className="sidebar-item shadow-top"></div>
    </div>
  );
}

export default Sidebar;
