import React, { useState, useEffect } from "react";
import "./DropdownItem.css";

function DropdownItem(props) {
  const {
    prev: { id, name, logo },
    included,
    addRemoveFilterHandler,
    isAlreadySelected,
  } = props;

  return (
    <div className="dropdown-item">
      <div className="dropdown-item-left">
        <img
          src={
            (logo !== null && logo) ||
            "https://falcon-ingredients.s3.us-west-1.amazonaws.com/default.png"
          }
          alt={name}
        />
        <p className="fs-15px weight-7 light-black">{name}</p>
      </div>
      <div className="dropdown-item-right">
        {included ? (
          <button className="included-btn">Inlcuded</button>
        ) : (
          <>
            <button
              disabled={isAlreadySelected}
              onClick={() => addRemoveFilterHandler("add", { id, name, logo })}
              className="dropdown-item-right-btn"
            >
              +
            </button>
            <button
              onClick={() => addRemoveFilterHandler("remove", id)}
              disabled={!isAlreadySelected}
              className="dropdown-item-right-btn"
            >
              -
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default DropdownItem;
