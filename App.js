import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './src/Reducers/store';


const App = () => ({
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  },
});

export default App;
