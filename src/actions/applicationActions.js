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
