const POKEMON_API = 'https://pokeapi.co/api/v2';

const FETCH_LOGIC = {
  fetchPokemonDetails: async pokemon => {
    const response = await fetch(`${POKEMON_API}/pokemon/${pokemon}`);
    const pokemonDetails = await response.json();
    return pokemonDetails;
  },
};

export default FETCH_LOGIC;
