import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import complaintScreen from '../../src/screens/complaintScreen';


it('renders correctly', () => {
  const tree = renderer.create(
    <complaintScreen />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
