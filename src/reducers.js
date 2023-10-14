import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    GET_ALL_ROBOTS,
    DELETE_ALL_ROBOTS,
    DELETE_ROBOT,
    CHANGE_NAME_FIELD,
    CHANGE_NICKNAME_FIELD,
    CREATE_ROBOT_PAGE,
    ADD_CREATED_ROBOT,
    CHANGE_SELECTED_AVATARS
     } from "./constants";

const intialStateSearchField = {
   searchField: ''
};

export const searcheRobots = (state=intialStateSearchField, action={}) => {
    switch(action.type){
       case CHANGE_SEARCH_FIELD :
        return Object.assign({}, state, { searchField: action.payload });
       default:
        return state;
    }
};

const intialStateGetRobots = {
    selectedAvatars: 'set4',
    isPending: false,
    requestedRobots: [],
    error: ''
 };
 
 export const requestRobots = (state=intialStateGetRobots, action={}) => {
     switch(action.type){
        case CHANGE_SELECTED_AVATARS :
         return Object.assign({}, state, { selectedAvatars: action.payload });
        case REQUEST_ROBOTS_PENDING :
         return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS : 
         return Object.assign({}, state, { requestedRobots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED :
         return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
         return state;
     }
 };

 const intialStateSelectAvatars = {
    selectedAvatars: 'set4',
 };
 
 export const selectAvatars = (state=intialStateSelectAvatars, action={}) => {
     switch(action.type){
        case CHANGE_SELECTED_AVATARS :
         return Object.assign({}, state, { selectedAvatars: action.payload });
         default:
            return state;
        }
    };


 const intialStateCreateRobots = {
   name: '',
   nickname: '',
 };

 export const createRobots = (state=intialStateCreateRobots, action={}) => {
    switch(action.type){
        case CHANGE_NAME_FIELD:
            return Object.assign({}, state, { name: action.payload});
        case CHANGE_NICKNAME_FIELD:
            return Object.assign({}, state, { nickname: action.payload});  
        default:
            return state;
    }
 }

 const intialStateCreateRobotPage = {
    createPage: false,
 };
 
 export const createRobotPage = (state=intialStateCreateRobotPage, action={}) => {
     switch(action.type){
        case CREATE_ROBOT_PAGE :
         return Object.assign({}, state, { createPage: !state.createPage });
        default:
         return state;
     }
 };

 const intialStateAllRobots = {
    robots: []
 };
 
 export const allRobots = (state=intialStateAllRobots, action={}) => {
     switch(action.type){
        case GET_ALL_ROBOTS : 
         return Object.assign({}, state, { robots: action.payload });
         case DELETE_ALL_ROBOTS :
         return Object.assign({}, state, { robots:[] });
        case DELETE_ROBOT :
         return Object.assign({}, state, { robots: state.robots.filter(robot => robot.lastName !== action.payload)});
        case ADD_CREATED_ROBOT : 
         return Object.assign({}, state, { robots: [...state.robots, action.payload] });
        default:
         return state;
     }
 };
 

 
 