import schoolReducer from '../../src/Reducers/schoolReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_SCHOOL_INFO,
  SET_SCHOOL_UF,
  SET_SCHOOL_CITY,
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
    expect(school.schoolStudents).not.toBe('100');


    const receivedSchool = {
      schoolCode: 1,
      schoolName: 'testSchool',
      schoolPhone: 34253045,
      schoolEmail: 'schoolemail@gmail.com',
      schoolLat: '-150000',
      schoolLong: '+150000',
      schoolStudents: '100',
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
    expect(school.schoolStudents).toBe('100');
  });
  it('Undefined action sended', () => {
    let school = initialState.school;

    expect(school.schoolCode).toBe(0);
    expect(school.schoolName).toBe('');
    expect(school.schoolPhone).toBe('');
    expect(school.schoolEmail).toBe('');
    expect(school.schoolLat).toBe('');
    expect(school.schoolLong).toBe('');
    expect(school.schoolStudents).toBe('');

    const sendedSchool = school;

    const action = undefined;

    expect(action).toBeUndefined();

    school = schoolReducer(school, action);

    expect(school).toEqual(sendedSchool);
  });

  it('sets uf', () => {
    let school = { ...initialState.school };

    expect(school.uf).not.toBe('DF - Distrito Federal');

    school = schoolReducer(school, {
      type: SET_SCHOOL_UF,
      payload: 'DF - Distrito Federal',
    });

    expect(school.uf).toBe('DF - Distrito Federal');
  });

  it('sets city', () => {
    let school = { ...initialState.school };

    expect(school.city).not.toBe('Brasília');

    school = schoolReducer(school, {
      type: SET_SCHOOL_CITY,
      payload: 'Brasília',
    });

    expect(school.city).toBe('Brasília');
  });
});
