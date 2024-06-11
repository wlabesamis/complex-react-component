import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formInputs: [],
};

const dependentFormSlice = createSlice({
  name: 'dependentForm',
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.formInputs.push(action.payload);
    },
    removeInput: (state, action) => {
      state.formInputs = state.formInputs.filter(input => input.id !== action.payload);
    },
    updateInputData: (state, action) => {
      const { id, field, value } = action.payload;
      const input = state.formInputs.find((input) => input.id === id);

      if (input) {
        input[field] = value;
      }
    },
    resetForm: state => {
      state.formInputs = [];
    }
  },
});

export const { addInput, removeInput, updateInputData, resetForm, setValue } = dependentFormSlice.actions;
export default dependentFormSlice.reducer;
