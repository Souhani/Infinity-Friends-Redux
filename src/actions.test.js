import {CHANGE_SEARCH_FIELD, 
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
} from "./constants";
import * as actions from './actions';
import congfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

const mockStore = congfigureMockStore([thunk]);

describe('searching', () => {
    it("should create action that search robots", () => {
        const text = 'roboty';
        const ecpectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: 'roboty',
        };
        expect(actions.searching(text)).toEqual(ecpectedAction);
    })
})

describe('deleteAllRobots', () => {
    it("should create action that delete all robots", () => {
        const ecpectedAction = {
            type: DELETE_ALL_ROBOTS,
        };
        expect(actions.deleteAllRobots()).toEqual(ecpectedAction);
    })
})

describe('addingName', () => {
    it("should create action that add robot name", () => {
        const name = 'roboty';
        const ecpectedAction = {
            type: CHANGE_NAME_FIELD,
            payload: 'roboty'
        };
        expect(actions.addingName(name)).toEqual(ecpectedAction);
    })
})

describe('addingNickname', () => {
    it("should create action that add robot nickname", () => {
        const nickname = 'robocap';
        const ecpectedAction = {
            type: CHANGE_NICKNAME_FIELD,
            payload: 'robocap'
        };
        expect(actions.addingNickname(nickname)).toEqual(ecpectedAction);
    })
})


describe('createRobotPage', () => {
    it("should create action that transfer the user to the create robbot page", () => {
        const ecpectedAction = {
            type: CREATE_ROBOT_PAGE,
        };
        expect(actions.createRobotPage()).toEqual(ecpectedAction);
    })
})

describe('getAllRobots', () => {
    it("should create an action that return al robots", () => {
        const robots = [
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
        ];
        const ecpectedAction = {
            type: GET_ALL_ROBOTS,
            payload: robots,
        };
        expect(actions.getAllRobots(robots)).toEqual(ecpectedAction);
    })
});

describe('deleteRobot', () => {
    it("should create action that delete one robot at a time", () => {
        const robotNickname = 'Snow'
        const ecpectedAction = {
            type: DELETE_ROBOT,
            payload: 'Snow',
        };
        expect(actions.deleteRobot(robotNickname)).toEqual(ecpectedAction);
    })
})

describe('addCreatedRobot', () => {
    it("should create action that adds created robot to existing robots", () => {
        const createdRobot = {
            id:123,
            firstName:'Jhon',
            lastName:'Snow'
        }
        const ecpectedAction = {
            type: ADD_CREATED_ROBOT,
            payload: createdRobot,
        };
        expect(actions.addCreatedRobot(createdRobot)).toEqual(ecpectedAction);
    })
})

describe('async action request robots', () => {
    afterEach(() => {
        sinon.restore();
    });    
    it('handles requesting robots API pending and success', async () => {
        expect.assertions(1);
        const expectedAction = [
            { 
                type: REQUEST_ROBOTS_PENDING 
            },
            {
                type: REQUEST_ROBOTS_SUCCESS, 
                payload: [
                    {
                        id: 123,
                        firstName: 'Jhon',
                        lastName: 'Snow'
                    },
                    {
                        id: 456,
                        firstName: 'targiyan',
                        lastName: 'deneris'
                    }
                ]
            }
        ]
        const fakeServer = sinon.fakeServer.create();
        const responseBody = JSON.stringify({
            users: [
                {
                    id: 123,
                    firstName: 'Jhon',
                    lastName: 'Snow'
                },
                {
                    id: 456,
                    firstName: 'targiyan',
                    lastName: 'deneris'
                }
            ]
        });
        fakeServer.respondWith('GET', 'https://dummyjson.com/users/', 
                               [200, { 'Content-Type': 'application/json' }, 
                               responseBody]);
        fakeServer.autoRespond = true;
        const store = mockStore();
        await store.dispatch(actions.requestRobots());
         const action = store.getActions();
         expect(action).toEqual(expectedAction)
      });
})