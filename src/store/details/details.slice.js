import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {},
  isLoaded: false,
  error: null,
};

export const detailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {
    fetchDetailsStart: state => {
      return { ...state, isLoaded: false };
    },
    fetchDetailsFailed: (state, param) => {
      const { payload } = param;
      return { ...state, isLoaded: true, error: payload };
    },
    fetchDetailsSuccess: (state, param) => {
      const { payload } = param;
      return { ...state, details: payload, isLoaded: true };
    },
  },
});

const { actions, reducer } = detailsSlice;

export const { fetchDetailsFailed, fetchDetailsStart, fetchDetailsSuccess } =
  actions;

export default reducer;
