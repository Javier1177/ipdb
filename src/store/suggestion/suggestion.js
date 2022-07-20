import { createSlice } from '@reduxjs/toolkit';

import pokemonInfoData from './mock-data';

const initialState = {
  suggestion: pokemonInfoData,
};

export const suggestionSlice = createSlice({
  name: 'suggested',
  initialState,
  reducers: {
    FETCH_SUGGESTED_POKEMONS_START: state => {
      state.suggested = {};
    },
    FETCH_SUGGESTED_POKEMONS_SUCCESS: state => {
      state.suggested = {};
    },
    FETCH_SUGGESTED_POKEMONS_FAILED: state => {
      state.suggested = {};
    },
  },
});

export const { FETCH_SUGGESTED_POKEMONS_START } = suggestionSlice.actions;

export default suggestionSlice.reducer;
