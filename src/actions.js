import { CHANGE_SEARCH_FIELD, 
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQEST_ROBOTS_FAILED,
         CHANGE_NAME_FIELD,
         CHANGE_NICKNAME_FIELD
          } from "./constants";

export const searching = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data.users}))
    .catch(error => dispatch({ type: REQEST_ROBOTS_FAILED, payload: error}))
};

export const addingName = (name) => ({
    type: CHANGE_NAME_FIELD,
    payload: name
});

export const addingNickname = (nickname) => ({
    type: CHANGE_NICKNAME_FIELD,
    payload: nickname
});

