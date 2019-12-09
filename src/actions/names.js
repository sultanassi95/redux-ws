import { getData } from "../utils";

export const GET_NAMES = "GET_NAMES";
export const SET_SEARCH = "SET_SEARCH";

const getNames = payload => ({
  type: GET_NAMES,
  payload
});

const setSearch = payload => ({
  type: SET_SEARCH,
  payload
});

export const getNamesAction = () => dispatch => {
  getData()
    .then(names => {
      dispatch(getNames(names));
    })
    .catch(err => console.error("err", err));
};

export const setSearchAction = search => dispatch => {
  dispatch(setSearch(search));
};
