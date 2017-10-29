import { Actions } from 'react-native-router-flux';
import { SET_SCHOOL_INFO } from './types';

export const setSchoolInfo = schoolData => ({
  type: SET_SCHOOL_INFO,
  payload: schoolData,
});

export const asyncChangeToSchoolInfoScreen = schoolData => (dispatch) => {
  dispatch(setSchoolInfo(schoolData));
  Actions.schoolInfoScreen();
};
