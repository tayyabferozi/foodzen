import { SINGLE_PRODUCT, FILTERS, ALTER_FILTERS, REMOVE_FILTER } from "./type";

const initialState = {
  single_product: "",
  filters: "",
  chosenFilters: {},
};

const addRemoveFilters = (state, action) => {
  const { payload } = action;

  let newFilterIds = [...new Set(payload.filterIds)];

  let newChosenFilters = {
    ...state.chosenFilters,
    [payload.title]: newFilterIds,
  };

  return {
    ...state,
    chosenFilters: newChosenFilters,
  };

  // if (payload.action === "add") {
  //   const newChosenFilters = [...state.chosenFilters, ...payload.filterIds];

  //   const filtersWithoutDuplication = [...new Set(newChosenFilters)];

  //   return {
  //     ...state,
  //     chosenFilters: filtersWithoutDuplication,
  //   };
  // } else if (payload.action === "remove") {
  //   const prevFiltersSet = new Set(state.chosenFilters);
  //   const toRemoveSet = new Set(payload.filterIds);

  //   for (const elemToRemove of toRemoveSet) {
  //     prevFiltersSet.delete(elemToRemove);
  //   }

  //   const newFilters = [...prevFiltersSet];

  //   return {
  //     ...state,
  //     chosenFilters: newFilters,
  //   };
  // }
};

const removeFilter = (state, action) => {
  const { payload } = action;

  console.log(payload);

  let newChosenFilters = { ...state.chosenFilters };

  let newTitledFilters = newChosenFilters[payload.title];

  const idx = newTitledFilters.findIndex((el) => {
    return el.id === payload.id;
  });

  if (idx > -1) {
    newTitledFilters.splice(idx, 1);
  }

  newChosenFilters = { ...newChosenFilters, [payload.title]: newTitledFilters };

  return {
    ...state,
    chosenFilters: newChosenFilters,
  };
};

const singleProductRed = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT:
      return {
        ...state,
        single_product: action.payload,
      };
    case FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case ALTER_FILTERS:
      return addRemoveFilters(state, action);
    case REMOVE_FILTER:
      return removeFilter(state, action);
    default:
      return state;
  }
};
export default singleProductRed;
