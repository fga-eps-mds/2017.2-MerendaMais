import React from 'react';
import store from './src/Reducers/store';
import Routes from './Routes.js';
import { Provider } from 'react-redux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
