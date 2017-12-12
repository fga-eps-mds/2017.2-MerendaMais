import { Actions } from 'react-native-router-flux';


export const backHandlerPop = () => {
  Actions.pop();
  return true;
};

export const backHandlerPopToMain = () => {
  Actions.popTo('mainScreen');
  return true;
};
