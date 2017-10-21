import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './src/Reducers/store';

/*
Change loggersLevel value to control loggers visualization.
loggersLevel = 'all'  ->  All loggers activate
loggersLevel = 'trace'  ->  Only trace loggers activate
loggersLevel = 'info'  ->  Only info loggers activate
loggersLevel = 'warn'  ->  Only warn loggers activate
loggersLevel = 'error'  ->  Only error loggers activate
loggersLevel = 'none'  ->  All loggers deactive
*/
export const loggersLevel = 'all';

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
