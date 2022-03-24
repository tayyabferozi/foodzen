import React from "react";
import "./Wrapper.css";
import BgGrayComponent from "components/BgGrayComponent/BgGrayComponent";
import Navbar from "layouts/Navbar/Navbar";
import Sidebar from "layouts/Sidebar/Sidebar";

function Wrapper(props) {
  let { showSidebar = true, focus } = props;
  let [sidebarShow, setSidebarShow] = React.useState(false);

  return (
    <>
      <Navbar focus={focus} sidebarState={{ sidebarShow, setSidebarShow }} />
      <div className="page-body">
        {showSidebar ? (
          <Sidebar sidebarState={{ sidebarShow, setSidebarShow }} />
        ) : (
          ""
        )}
        <div className={showSidebar ? `showSidebar` : ""}>
          <BgGrayComponent styles={props.bodyStyles}>
            {props.children}
          </BgGrayComponent>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
