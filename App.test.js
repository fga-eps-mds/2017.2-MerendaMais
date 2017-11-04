import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';

jest.unmock('react-native-router-flux');

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
