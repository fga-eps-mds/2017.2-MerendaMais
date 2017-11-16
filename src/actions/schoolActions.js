import { Actions } from 'react-native-router-flux';
import { SET_SCHOOL_INFO, SET_SCHOOL_CITY, SET_SCHOOL_UF } from './types';

export const setSchoolInfo = schoolData => ({
  type: SET_SCHOOL_INFO,
  payload: schoolData,
});

export const setUf = uf => ({
  type: SET_SCHOOL_UF,
  payload: uf,
});

export const setCity = city => ({
  type: SET_SCHOOL_CITY,
  payload: city,
});

export const asyncChangeToSchoolInfoScreen = schoolData => (dispatch) => {
  dispatch(setSchoolInfo(schoolData));
  Actions.schoolInfoScreen();
};
