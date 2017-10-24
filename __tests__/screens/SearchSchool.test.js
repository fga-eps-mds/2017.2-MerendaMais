import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import SearchSchool from '../../src/screens/SearchSchool';
import SearchSchoolContainer from '../../src/Containers/SearchSchoolContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const props = {
  state: {
    city: 'testecity',
    name: 'nametest',
    isLoading: false,
  },
};

const store = mockStore(props);

describe('Testing SearchSchool', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SearchSchoolContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing SearchSchool Input', () => {
  const wrapper = shallow(<SearchSchool />);

  it('should change state when the text of city input component changes', () => {
    const cityInputComponent = wrapper.find('TextInput').at(0);
    cityInputComponent.simulate('ChangeText', 'Gama');
    expect(wrapper.state('city')).toEqual('Gama');
  });

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find('TextInput').at(1);
    nameInputComponent.simulate('ChangeText', 'FGA');
    expect(wrapper.state('name')).toEqual('FGA');
  });
});

/* describe('Testing search school', () => {
  it('displays an ActivityIndicator when requesting data', () => {
    const myProps = { ...props };
    myProps.state = {
      ...props.state,
      isLoading: true,
    };
    const wrapper = shallow(<SearchSchool {...myProps} />);

    const foundActivityIndicator = wrapper.findWhere(c => c.key() === 'Show_ActivityIndicator');
    const foundTouchableOpacity = wrapper.findWhere(c => c.key() === 'Show_TouchableOpacity');

    expect(foundActivityIndicator.length).toEqual(1);
    expect(foundTouchableOpacity.length).toEqual(0);
  });
}); */
