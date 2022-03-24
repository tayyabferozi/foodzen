import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import DropDown from "components/DropDown/DropDown";
import TitleBar from "components/TitleBar/TitleBar";
import Wrapper from "HOC/Wrapper/Wrapper";
import DishCard from "components/DishCard/DishCard";
import SearchResultCard from "components/SearchResultCard/SearchResultCard";
import filterIcon from "assets/images/filter.png";
import dropdownCrossIcon from "assets/images/cross-icon.png";
import { Link } from "react-router-dom";
import _ from "lodash";

import isEmpty from "../../utils/is-empty";

// REDUX IMPORTS
import { filtersApi } from "redux/action";
import { connect } from "react-redux";
import Loader from "components/Loader";

function SearchPage({ filters, chosenFilters, filtersApi }) {
  useEffect(() => {
    // FILTER DATA
    filtersApi();
  }, [filtersApi]);

  const [show, setshow] = React.useState(false);
  const dropdownSidebarRef = React.useRef();
  const [chosenFiltersArray, setChosenFiltersArray] = useState();

  // let searchResult = [
  // {
  //   id: 23572,
  //   value: "Onion",
  // },
  // ];

  React.useEffect(() => {
    let handler = (e) => {
      if (!dropdownSidebarRef.current.contains(e.target)) {
        setshow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    const arr = [];

    for (const el in chosenFilters) {
      chosenFilters[el].forEach((elem) => {
        arr.push({ title: el, ...elem });
      });
    }

    setChosenFiltersArray(arr);
  }, [chosenFilters]);

  return (
    <>
      {(Object.keys(filters).length && (
        <Wrapper
          bodyStyles={{
            padding: "15px 0",
            paddingLeft: "clamp(15px,2.35vw,31px)",
            paddingRight: "clamp(15px,2.35vw,31px)",
            marginTop: "72px",
          }}
        >
          <div className="dropdowns-wrapper">
            <div
              className={`dropdowns ${show ? "show" : ""} mb-30`}
              ref={dropdownSidebarRef}
            >
              <img
                onClick={() => setshow(false)}
                className="dropdown-cross-icon"
                src={dropdownCrossIcon}
                alt=""
              />
              <DropDown data={filters["1"]} btnTitle="Ingredients" />
              <DropDown data={filters["3"]} btnTitle="Cuisine" />
              <DropDown data={filters["8"]} btnTitle="Ingredients Group" />
              <DropDown data={filters["4"]} btnTitle="Difficulty" />
              <DropDown data={filters["1"]} btnTitle="Time" />
              <DropDown
                data={filters["7"]}
                btnTitle="Category"
                position="right"
              />
              <DropDown
                data={filters["8"]}
                btnTitle="Course"
                position="right"
              />
            </div>
            <div className="filter-icon" onClick={() => setshow(!show)}>
              <img src={filterIcon} alt="" />
            </div>
          </div>

          <div>
            <div className="mb-30">
              {!isEmpty(chosenFiltersArray) ? (
                <div className="search-result-bar">
                  <p className="fs-20px weight-6">
                    Results {filters["1"].length} :{" "}
                  </p>
                  <div className="serach-result-card-wrapper">
                    {chosenFiltersArray.map((card, index) => (
                      <SearchResultCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        value={_.startCase(card.name)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <TitleBar
                  title="Popular Recipes To Satify your Cravings"
                  fontSize="fs-20px"
                  weight="weight-5"
                />
              )}
            </div>

            <div className="dishes">
              {/* {new Array(12).fill("").map((card, index) => (
								<Link to="/" style={{ color: "inherit" }}>
									<DishCard />
								</Link>
							))} */}
              {!isEmpty(filters) &&
                filters["1"].map((card, index) => {
                  return (
                    <Link
                      to={`/${card.id}/${_.snakeCase(card.name)}-recipe`}
                      style={{ color: "inherit" }}
                    >
                      <DishCard card={card} />
                    </Link>
                  );
                })}
            </div>
          </div>
        </Wrapper>
      )) || <Loader />}
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    filters: state.singleProductRed.filters,
    chosenFilters: state.singleProductRed.chosenFilters,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    filtersApi: function () {
      dispatch(filtersApi());
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(SearchPage);
