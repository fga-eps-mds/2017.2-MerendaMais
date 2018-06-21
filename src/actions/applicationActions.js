import { IS_LOADING, IS_NOT_LOADING } from './types';

// Actions
export const isLoading = () => ({
  type: IS_LOADING,
});

export const isNotLoading = () => ({
  type: IS_NOT_LOADING,
});

export const resetSpecificState = state => ({
  type: state,
});

export const resetStore = (...states) => (dispatch) => {
  for (let i = 0; i < states.length; i += 1) {
    dispatch(resetSpecificState(`reset_${states[i]}`.toUpperCase()));
  }
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
