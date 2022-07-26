import { createSelector } from '@reduxjs/toolkit';

const selectDetailsReducer = state => state.pokemonDetails;

export const selectPokemonDetails = createSelector(
  selectDetailsReducer,
  pokemonDetails => pokemonDetails.details
);

export const selectPokemonIsLoaded = createSelector(
  selectDetailsReducer,
  pokemonDetails => pokemonDetails.isLoaded
);
