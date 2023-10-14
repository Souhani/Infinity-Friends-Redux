import React from 'react';
import { shallow } from 'enzyme';
 
import SearchBox from './SearchBox';

it ('testing SearchBox', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
})