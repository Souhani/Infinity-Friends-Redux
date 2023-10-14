import { shallow } from 'enzyme';
import CounterButton from './CounterButton ';

describe('test  CounterButton component', () => {
    it('CouterButtton rendering', () => {
        expect.assertions(1);
          const wrapper = shallow(<CounterButton />);
          expect(wrapper).toMatchSnapshot();
    });
    it('testing state', () => {
        expect.assertions(3);
          const wrapper = shallow(<CounterButton />);
          expect(wrapper.find('button').text()).toContain('Clicked 0 times');
          wrapper.find('[id="counter"]').simulate('click');
          expect(wrapper.find('button').text()).toContain('Clicked 1 times');
          wrapper.find('[id="counter"]').simulate('click');
          wrapper.find('[id="counter"]').simulate('click');
          expect(wrapper.find('button').text()).toContain('Clicked 3 times');
    });
    it('testing props', () => {
        expect.assertions(1);
          const wrapper = shallow(<CounterButton color={'red'}/>);
          expect(wrapper.props().style.color).toEqual('red');
    })
})