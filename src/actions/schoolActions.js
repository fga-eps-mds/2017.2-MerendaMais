import { SET_SCHOOL_INFO } from './types';

const setSchoolInfo = schoolData => ({
  type: SET_SCHOOL_INFO,
  payload: schoolData,
});

export default setSchoolInfo;
