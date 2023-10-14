import {   CHANGE_SEARCH_FIELD, 
            REQUEST_ROBOTS_PENDING,
            REQUEST_ROBOTS_SUCCESS,
            REQUEST_ROBOTS_FAILED,
            GET_ALL_ROBOTS,
            DELETE_ALL_ROBOTS,
            DELETE_ROBOT,
            CHANGE_NAME_FIELD,
            CHANGE_NICKNAME_FIELD,
            CREATE_ROBOT_PAGE,
            ADD_CREATED_ROBOT
       } from "./constants";

import * as reducers from './reducers';

describe('searcheRobots', () => {
    const intialStateSearchField = {
        searchField: ''
        };
    it('should return the intial state', () => {
        expect(reducers.searcheRobots(intialStateSearchField, {})).toEqual(intialStateSearchField)
    })
    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searcheRobots(intialStateSearchField, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'searchQuery'
        })).toEqual({searchField: 'searchQuery'})
    })
})

describe('requestRobots', () => {
    const intialStateGetRobots = {
        isPending: false,
        requestedRobots: [],
        error: ''
     };
     
    it('should return the intial state', () => {
        expect(reducers.requestRobots(intialStateGetRobots, {})).toEqual(intialStateGetRobots)
    })
    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(intialStateGetRobots, { type: REQUEST_ROBOTS_PENDING })).toEqual({
            isPending: true,
            requestedRobots: [],
            error: ''
         })
    })
    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        const action = { 
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id:123,
                firstName:'Jhon',
                lastName:'Snow'
            }]
         }
        expect(reducers.requestRobots(intialStateGetRobots, action)).toEqual({
            isPending: false,
            requestedRobots: [{
                id:123,
                firstName:'Jhon',
                lastName:'Snow'
            }],
            error: ''
         })
    })
    it('should handle REQUEST_ROBOTS_FAILED', () => {
        const action = { 
            type: REQUEST_ROBOTS_FAILED,
            payload: 'oh nooo!!'
         }
        expect(reducers.requestRobots(intialStateGetRobots, action)).toEqual({
            isPending: false,
            requestedRobots: [],
            error: 'oh nooo!!'
         })
    })
    it('should handle REQEST_ROBOTS_FAILED', () => {
        const action = { 
            type: REQUEST_ROBOTS_FAILED,
            payload: 'oh nooo!!'
         }
        expect(reducers.requestRobots(intialStateGetRobots, action)).toEqual({
            isPending: false,
            requestedRobots: [],
            error: 'oh nooo!!'
         })
    })
})

describe('createRobots', () => {
    const intialStateCreateRobots = {
        name: '',
        nickname: '',
      };
    it('should return the intial state', () => {
        expect(reducers.createRobots(intialStateCreateRobots, {})).toEqual({
            name: '',
            nickname: '',
          })
    })
    it('should handle CHANGE_NAME_FIELD', () => {
        expect(reducers.createRobots(intialStateCreateRobots, {
            type: CHANGE_NAME_FIELD,
            payload: 'Jhon'
        })).toEqual({
            name: 'Jhon',
            nickname: '',
          })
    })

    it('it should handle CHANGE_NICKNAME_FIELD', () => {
        const action = {
            type: CHANGE_NICKNAME_FIELD,
            payload: 'ali'
        }
        expect(reducers.createRobots(intialStateCreateRobots, action))
        .toEqual({
            name: '',
            nickname: 'ali'
        })
    })
})

describe('createRobotPage', () => {
    const intialStateCreateRobotPage = {
        createPage: false,
     };
    it('should return the intial state', () => {
        expect(reducers.createRobotPage(intialStateCreateRobotPage, {}))
        .toEqual({ createPage: false, })
    })
    it('should handle CHANGE_ROBOT_PAGE', () => {
        const action = {
            type: CREATE_ROBOT_PAGE,
        }
        expect(reducers.createRobotPage(intialStateCreateRobotPage, action))
        .toEqual({ createPage: true, })
        
    })
})

describe('allRobots', () => {
    const intialStateAllRobots = {
        robots: []
     };
    it('should return intial state', () => {
        expect(reducers.allRobots(intialStateAllRobots,{}))
        .toEqual({ robots: [] })
    })
    
    it('should handle GET_ALL_ROBOTS', () => {
        const action = {
            type: GET_ALL_ROBOTS,
            payload: [
                {
                    id:123,
                    firstName:'Jhon',
                    lastName:'Snow'
                },
                {
                    id: 456,
                    firstName: 'targiyan',
                    lastName: 'deneris'
                }
            ]
        };
        expect(reducers.allRobots(intialStateAllRobots,action))
        .toEqual({
            robots: [
                {
                    id:123,
                    firstName:'Jhon',
                    lastName:'Snow'
                },
                {
                    id: 456,
                    firstName: 'targiyan',
                    lastName: 'deneris'
                }
            ]
        })
    })
    it('should handle DELETE_ALL_ROBOTS', () => {
        const action = {
            type: DELETE_ALL_ROBOTS,
        }
        expect(reducers.allRobots(intialStateAllRobots, action))
        .toEqual({
            robots: []
        })
    })
    it('should handle DELETE_ROBOT', () => {
        const action = {
            type: DELETE_ROBOT,
            payload: 'Snow'
        }
        const state = {
            robots: [
                {
                    id:123,
                    firstName:'Jhon',
                    lastName:'Snow'
                },
                {
                    id: 456,
                    firstName: 'targiyan',
                    lastName: 'deneris'
                }
            ]
        }
        expect(reducers.allRobots(state, action))
        .toEqual({
                robots: [
                    {
                        id: 456,
                        firstName: 'targiyan',
                        lastName: 'deneris'
                    }
                ]
        })
    })
    
    it('should handle ADD_CREATED_ROBOT', () => {
        const state = {
            robots: [
                {
                    id:123,
                    firstName:'Jhon',
                    lastName:'Snow'
                },
                {
                    id: 456,
                    firstName: 'targiyan',
                    lastName: 'deneris'
                }
            ]
        }
        const action = {
            type: ADD_CREATED_ROBOT,
            payload: {
                id: 789,
                firstName: 'ImNew',
                lastName: 'NewHeyyy',
            }
        }

        expect(reducers.allRobots(state, action))
        .toEqual(
            {
                robots: [
                    {
                        id:123,
                        firstName:'Jhon',
                        lastName:'Snow'
                    },
                    {
                        id: 456,
                        firstName: 'targiyan',
                        lastName: 'deneris'
                    },
                    {
                        id: 789,
                        firstName: 'ImNew',
                        lastName: 'NewHeyyy',
                    }
                ]
            }
        )
    })
    
})

