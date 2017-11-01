import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { setSchoolInfo } from '../../src/actions/schoolActions';


const SCHOOL_NAME = 'School Name';

const SCHOOL_DATA = {
  schoolName: SCHOOL_NAME,
};


describe('Testing schoolActions', () => {
  it('Test if we can set data using setSchoolInfo', () => {
    const actionReturn = setSchoolInfo(SCHOOL_DATA);

    expect(actionReturn.payload).toBe(SCHOOL_DATA);
  });
});
