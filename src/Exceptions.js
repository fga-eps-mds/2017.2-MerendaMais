export class GetVisitSchedulePostListError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GetVisitSchedulePostListError);
    }

    this.response = response;
  }
}

export class GetVisitScheduleContentError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GetVisitScheduleContentError);
    }

    this.response = response;
  }
}
