import schoolReducer from '../../src/Reducers/schoolReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_SCHOOL_INFO,
} from '../../src/actions/types';

describe('Testing schoolReducer', () => {
  it('sets school information', () => {
    let school = { ...initialState.school };

    expect(school.schoolCode).not.toBe(1);
    expect(school.schoolName).not.toBe('testSchool');
    expect(school.schoolPhone).not.toBe(34253045);
    expect(school.schoolEmail).not.toBe('schoolemail@gmail.com');
    expect(school.schoolLat).not.toBe('-150000');
    expect(school.schoolLong).not.toBe('+150000');

    const receivedSchool = {
      schoolCode: 1,
      schoolName: 'testSchool',
      schoolPhone: 34253045,
      schoolEmail: 'schoolemail@gmail.com',
      schoolLat: '-150000',
      schoolLong: '+150000',
    };

    school = schoolReducer(school, {
      type: SET_SCHOOL_INFO,
      payload: receivedSchool,
    });

    expect(school.schoolCode).toBe(1);
    expect(school.schoolName).toBe('testSchool');
    expect(school.schoolPhone).toBe(34253045);
    expect(school.schoolEmail).toBe('schoolemail@gmail.com');
    expect(school.schoolLat).toBe('-150000');
    expect(school.schoolLong).toBe('+150000');
  });
});
