import { SINGLE_PRODUCT, FILTERS, ALTER_FILTERS, REMOVE_FILTER } from "./type";
import axios from "axios";

// DETAIL PAGE START
const singleProductFunc = (data) => {
  return {
    type: SINGLE_PRODUCT,
    payload: data,
  };
};

export const singleProductApi = (id) => {
  return (dispatch) => {
    axios.get("https://foodzen.org/core/falcon/recipe/" + id).then((res) => {
      dispatch(singleProductFunc(res.data));
    });
  };
};
// DETAIL PAGE END

// FILTERS START
const filtersFunc = (data) => {
  return {
    type: FILTERS,
    payload: data,
  };
};

export const filtersApi = () => {
  return (dispatch) => {
    axios
      .get("https://www.foodzen.org/core/falcon/search/filter")
      .then((res) => {
        dispatch(filtersFunc(res.data));
      });
  };
};
// FILTERS END

// ADD/REMOVE FILTER START

export const alterFiltersState = (title, filterIds) => {
  return {
    type: ALTER_FILTERS,
    payload: { title, filterIds },
  };
};

// ADD/REMOVE FILTER END

// ADD/REMOVE FILTER START

export const removeAFilter = (title, filterId) => {
  return {
    type: REMOVE_FILTER,
    payload: { title, id: filterId },
  };
};

// ADD/REMOVE FILTER END
