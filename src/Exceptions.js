export class AuthError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthError);
    }

    this.response = response;
  }
}

export class ProfileError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProfileError);
    }

    this.response = response;
  }
}

export class GroupError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GroupError);
    }

    this.response = response;
  }
}
