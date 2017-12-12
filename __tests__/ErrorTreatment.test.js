import * as Toast from '../src/components/Toast';
import {
  treatingEditCounselorError,
  treatingGetUserProfileInLoginError,
} from '../src/ErrorTreatment';
import { LOGIN_PROFILE_ERROR } from '../src/constants/generalConstants';

const errorNumbers = [401, 403, 404, 500];

describe('Testing treatingEditCounselorError', () => {
  beforeAll(() => {
    Toast.default.Toast = jest.fn(() => ({}));
  });

  afterEach(() => {
    Toast.default.Toast.mockClear();
  });

  it('Testing all errors', () => {
    Toast.default.Toast = jest.fn(() => ({}));

    errorNumbers.forEach((error) => {
      treatingEditCounselorError(error);
      expect(Toast.default.Toast.mock.calls.length).toBe(1);
      Toast.default.Toast.mockClear();
    });
  });
});

describe('Testing treatingGetUserProfileInLoginError', () => {
  it('Testing 404', () => {
    treatingGetUserProfileInLoginError(errorNumbers[2]);
    expect(Toast.default.Toast.mock.calls.length).toBe(1);
    expect(Toast.default.Toast.mock.calls[0][0]).toBe(LOGIN_PROFILE_ERROR);
  });

  it('Testing remaining errors', () => {
    Toast.default.Toast = jest.fn(() => ({}));

    errorNumbers.forEach((error) => {
      treatingEditCounselorError(error);
      expect(Toast.default.Toast.mock.calls.length).toBe(1);
      Toast.default.Toast.mockClear();
    });
  });
});
