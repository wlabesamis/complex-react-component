import { configureStore } from '@reduxjs/toolkit';
import dependentFormReducer from '../features/dependentForm/dependentFormSlice';
import { loadState, saveState } from '../utils/sessionStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    dependentForm: dependentFormReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    dependentForm: store.getState().dependentForm,
  });
});

export default store;
