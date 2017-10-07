import 'react-native';
import React from 'react';
import InitialScreen from '../src/screens/InitialScreen';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <InitialScreen />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
