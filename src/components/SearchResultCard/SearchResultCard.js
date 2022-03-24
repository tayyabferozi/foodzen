import React from "react";
import "./SearchResultCard.css";
import crossIcon from "assets/images/cross-icon.png";
import { useDispatch } from "react-redux";

import { removeAFilter } from "../../redux/action";

function SearchResultCard(props) {
  const dispatch = useDispatch();

  const removeFilterHandler = () => {
    dispatch(removeAFilter(props.title.toLowerCase(), props.id));
  };

  return (
    <div className="search-result-card">
      <p className="fs-16px weight-5 light-black">{props.value}</p>
      <div className="cross-icon" onClick={removeFilterHandler}>
        <img src={crossIcon} alt="" />
      </div>
    </div>
  );
}

export default SearchResultCard;
