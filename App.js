import React from 'react';
import { Provider } from 'react-redux';
import SchedulingVisit from './src/screens/SchedulingVisit';
import store from './src/Reducers/store';

/*
Change loggersLevel value to control loggers visualization.
loggersLevel = 'all'  ->  All loggers activate
loggersLevel = 'all -trace'  ->  All loggers activate execept trace loggers
loggersLevel = 'trace'  ->  Only trace loggers activate
loggersLevel = 'info'  ->  Only info loggers activate
loggersLevel = 'warn'  ->  Only warn loggers activate
loggersLevel = 'error'  ->  Only error loggers activate
loggersLevel = 'none'  ->  All loggers deactive
*/
export const loggersLevel = 'all -trace';

const App = () => ({
  render() {
    return (
      <Provider store={store}>
        <SchedulingVisit />
      </Provider>
    );
  },
});

export default App;
