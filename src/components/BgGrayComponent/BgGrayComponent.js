import React from "react";

function BgGrayComponent(props) {
  const { styles } = props;
  return (
    <div className="bg-light-gray w-full" style={styles}>
      {props.children}
    </div>
  );
}

export default BgGrayComponent;
