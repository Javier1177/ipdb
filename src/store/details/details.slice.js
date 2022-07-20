import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {},
  isLoading: false,
  error: null,
};

export const detailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {
    fetchDetailsStart: state => {
      return { ...state, isLoading: true };
    },
    fetchDetailsFailed: (state, param) => {
      const { payload } = param;
      return { ...state, isLoading: false, error: payload };
    },
    fetchDetailsSuccess: (state, param) => {
      const { payload } = param;
      return { ...state, details: payload, isLoading: false };
    },
  },
});

const { actions, reducer } = detailsSlice;

export const { fetchDetailsFailed, fetchDetailsStart, fetchDetailsSuccess } =
  actions;

export default reducer;
