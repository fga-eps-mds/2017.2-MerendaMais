import { IS_LOADING, IS_NOT_LOADING } from './types';

// Application Actions List
export const isLoading = () => ({
  type: IS_LOADING,
});

export const isNotLoading = () => ({
  type: IS_NOT_LOADING,
});

export const resetSpecificState = state => ({
  type: state,
});

// This fuction resets store for each state available
export const resetStore = (...states) => (dispatch) => {
  states.forEach((state) => {
    const RESET_ACTION_TYPE = `reset_${state}`.toUpperCase();
    dispatch(resetSpecificState(RESET_ACTION_TYPE));
  });
};


export const convertingContentStringToJSON = (contentStringSingleQuote) => {
  // Changing ' to " in string received from Nuvem Civica.
  const contentStringDoubleQuote = contentStringSingleQuote.replace(/'/g, '"');

  // Converting content string to content JSON.
  const contentJSON = JSON.parse(contentStringDoubleQuote);

  return contentJSON;
};

// Used in Async Action to Register Counselor
export const convertingJSONToString = (profileJSON) => {
  // Converting profile JSON to profile string received from Nuvem Civica.
  const profileStringDoubleQuote = JSON.stringify(profileJSON);

  // Changing " to '.
  const profileStringSingleQuote = profileStringDoubleQuote.replace(/"/g, "'");

  return profileStringSingleQuote;
};
