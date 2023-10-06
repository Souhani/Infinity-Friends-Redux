import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQEST_ROBOTS_FAILED,
    CHANGE_NAME_FIELD,
    CHANGE_NICKNAME_FIELD
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
    isPending: false,
    requestedRobots: [],
    error: ''
 };
 
 export const requestRobots = (state=intialStateGetRobots, action={}) => {
     switch(action.type){
        case REQUEST_ROBOTS_PENDING :
         return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS :
         return Object.assign({}, state, { requestedRobots: action.payload, isPending: false });
        case REQEST_ROBOTS_FAILED :
         return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
         return state;
     }
 };

 const intialStateCreateRobots = {
   name: '',
   nickname: '',
   createdRobots: []
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