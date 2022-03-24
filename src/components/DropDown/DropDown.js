import React, { useState, useRef, useEffect, useCallback } from "react";
import "./DropDown.css";
import downArrowIcon from "assets/images/down-arrow.png";
import searchIcon from "assets/images/search-2.png";
import DropdownItem from "components/DropdownItem/DropdownItem";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

import { alterFiltersState } from "../../redux/action";
import isEmpty from "../../utils/is-empty";

function DropDown(props) {
  const dispatch = useDispatch();
  const { chosenFilters } = useSelector((state) => state.singleProductRed);

  let { btnTitle, data } = props;
  const [selectedFiltersState, setSelectedFiltersState] = useState([]);

  const optionsWrapperRef = useRef(null);
  const [searchState, setSearchState] = useState("");

  const [show, setShow] = useState(false);
  const menuRef = useRef();
  const dropdownMenuRef = useRef();
  const [position, setPosition] = useState("left");

  const searchChangeHandler = (e) => {
    setSearchState(e.target.value);
  };

  const clearSelectedItemsHandler = () => {
    setSelectedFiltersState(() => {
      const titledFilters = chosenFilters[btnTitle.toLowerCase()];
      if (!isEmpty(titledFilters)) {
        return [...titledFilters];
      } else {
        return [];
      }
    });
  };

  const chooseFiltersHandler = () => {
    dispatch(alterFiltersState(btnTitle.toLowerCase(), selectedFiltersState));
  };

  const addRemoveFilterHandler = (action, obj) => {
    if (action === "add") {
      setSelectedFiltersState((prevState) => {
        return [...prevState, obj];
      });
    } else {
      setSelectedFiltersState((prevState) => {
        const idx = prevState.findIndex((el) => {
          return el.id === obj;
        });

        if (idx > -1) {
          prevState.splice(idx, 1);
        }

        return [...prevState];
      });
    }
  };

  const updateFromAppState = useCallback(() => {
    console.log("CALLED");
    setSelectedFiltersState((prevState) => {
      let titledFilters = chosenFilters[btnTitle.toLowerCase()];

      if (!isEmpty(chosenFilters) && !isEmpty(titledFilters)) {
        titledFilters.forEach((el) => {
          console.log(el);
          el.included = true;
        });
        let newState = [...prevState, ...titledFilters];
        newState = [...new Set(newState)];
        return newState;
      } else {
        return [...prevState];
      }
    });
  }, [btnTitle, chosenFilters]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    updateFromAppState();
    clearSelectedItemsHandler();
  }, [updateFromAppState, show]);

  useEffect(() => {
    console.log(selectedFiltersState);
  }, [selectedFiltersState]);

  useEffect(() => {
    let $rootElem = dropdownMenuRef.current;
    let element = $rootElem;
    let elementRect = element.getBoundingClientRect();

    if (elementRect.x + elementRect.width + 20 > window.innerWidth) {
      element.classList.remove("left");
      element.classList.add("right");
    }

    return () => {};
  });

  useEffect(() => {
    let $rootElem = $(optionsWrapperRef.current);
    let $mainElems = $rootElem.find(".dropdown-item-left p");

    $mainElems.each((idx, elem) => {
      let $elem = $(elem);
      let mainParent = $elem.parents(".dropdown-item").parent();
      mainParent.css("display", "block");
      if (
        !isEmpty(searchState) &&
        elem.textContent.toUpperCase().indexOf(searchState.toUpperCase()) === -1
      ) {
        mainParent.css("display", "none");
      }
    });
  }, [searchState, menuRef]);

  useEffect(() => {
    updateFromAppState();
  }, [updateFromAppState]);

  return (
    <div ref={menuRef} className="dropdown">
      <div className="dropdown-btn" onClick={() => setShow(!show)}>
        {btnTitle} <img src={downArrowIcon} alt="" />
      </div>
      <div
        className={`dropdown-menu ${position} ${show ? "show" : ""} `}
        ref={dropdownMenuRef}
      >
        <div className="dropdown-menu-body">
          <div className="dropdown-input">
            <img src={searchIcon} alt="" />
            <input
              onChange={searchChangeHandler}
              type="text"
              placeholder="Search for Ingredients"
              value={searchState}
            />
          </div>

          <div ref={optionsWrapperRef} className="dropdown-items">
            {data.map((prev, ind) => {
              let isAlreadySelected = false;
              let included = false;

              const idx = selectedFiltersState.findIndex((el) => {
                return el.id === prev.id;
              });

              if (idx > -1) {
                isAlreadySelected = true;
              }

              if (!isEmpty(chosenFilters)) {
                let titledFilters = chosenFilters[btnTitle.toLowerCase()];
                if (!isEmpty(titledFilters)) {
                  const idx2 = titledFilters.findIndex((el) => {
                    return el.id === prev.id;
                  });

                  if (idx2 > -1) {
                    included = true;
                  }
                }
              }

              return (
                <div key={ind}>
                  <DropdownItem
                    title={btnTitle}
                    included={included}
                    isAlreadySelected={isAlreadySelected}
                    selectedFiltersState={selectedFiltersState}
                    addRemoveFilterHandler={addRemoveFilterHandler}
                    prev={prev}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="dropdown-footer">
          <button onClick={clearSelectedItemsHandler}>Clear</button>
          <button onClick={chooseFiltersHandler}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
