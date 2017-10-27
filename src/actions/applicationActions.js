import { IS_LOADING, IS_NOT_LOADING } from './types';

// Actions
export const isLoading = () => ({
  type: IS_LOADING,
});

export const isNotLoading = () => ({
  type: IS_NOT_LOADING,
});
