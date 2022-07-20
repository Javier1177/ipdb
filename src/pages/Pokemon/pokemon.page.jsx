import { Route, Routes } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails/pokemonDetails.page';

const Pokemon = () => {
  return (
    <Routes>
      <Route index element={<div>HeyHEY</div>} />
      <Route path=':pokemon' element={<PokemonDetails />} />
    </Routes>
  );
};

export default Pokemon;
