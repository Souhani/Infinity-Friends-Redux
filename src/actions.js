import { CHANGE_SEARCH_FIELD, 
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED,
         GET_ALL_ROBOTS,
         DELETE_ALL_ROBOTS,
         CHANGE_NAME_FIELD,
         CHANGE_NICKNAME_FIELD,
         CREATE_ROBOT_PAGE,
         DELETE_ROBOT,
         ADD_CREATED_ROBOT,
         CHANGE_SELECTED_AVATARS
          } from "./constants";

import { ApiCall } from "./api/ApiCall";

export const searching = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});


export const deleteAllRobots = () => ({
    type: DELETE_ALL_ROBOTS,
});


export const addingName = (name) => ({
    type: CHANGE_NAME_FIELD,
    payload: name
});

export const addingNickname = (nickname) => ({
    type: CHANGE_NICKNAME_FIELD,
    payload: nickname
});


export const createRobotPage = () =>{ 
    return{
    type: CREATE_ROBOT_PAGE,
}};

export const getAllRobots = (robots) => ({
    type: GET_ALL_ROBOTS,
    payload: robots
})

export const deleteRobot = (robotNickname) => ({
    type: DELETE_ROBOT,
    payload: robotNickname
})

export const addCreatedRobot = (robot) => ({
    type: ADD_CREATED_ROBOT,
    payload: robot
})

export const selectingAvatars = (avatars) => ({
    type: CHANGE_SELECTED_AVATARS,
    payload: avatars
})

export const requestRobots = () =>  (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING }); 
    return (
    ApiCall("https://dummyjson.com/users")
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data.users}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error})))
};


