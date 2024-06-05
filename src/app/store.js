import { configureStore } from '@reduxjs/toolkit';
import dependentFormReducer from '../features/dependentForm/dependentFormSlice';

const store = configureStore({
  reducer: {
    dependentForm: dependentFormReducer,
  },
});

export default store;
