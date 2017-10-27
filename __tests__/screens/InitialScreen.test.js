import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import InitialScreen from '../../src/screens/InitialScreen';


it('renders correctly', () => {
  const tree = renderer.create(
    <InitialScreen />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
