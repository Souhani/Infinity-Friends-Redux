import React from 'react';
import { shallow } from 'enzyme';
 
import Card from './Card';

it ('testing card', () => {
    expect.assertions(3);
    const robotsMock = [{
        id:1,
        firstName:'jhon',
        lastName:'snow'
    },];
    const mockHandleDeleteCard = jest.fn();
    const wrapper= shallow(<Card filteredRobots={robotsMock} onDeleteRobot={mockHandleDeleteCard}/>);
    //test rendering
    expect(wrapper).toMatchSnapshot();
    //test clicking
    wrapper.find('button').simulate('click');
    expect(mockHandleDeleteCard.mock.calls.length).toBe(1);
    expect(mockHandleDeleteCard).toBeCalledWith("snow");

})