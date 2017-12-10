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

export class GetMeetingPostListError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GetMeetingPostListError);
    }

    this.response = response;
  }
}

export class GetMeetingContentError extends Error {
  constructor(response, ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GetMeetingContentError);
    }

    this.response = response;
  }
}
