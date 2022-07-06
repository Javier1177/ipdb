import PokeCard from '../pokeCard/pokeCard.components';

import './pokeSuggestion.styles.scss';

const mockedData = {
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  name: 'Staryu',
  type: 'Water',
  height: '80cm',
  weight: '34.5kg',
};

const PokeSuggestion = () => {
  return (
    <div className='pokeSuggestion-container'>
      <h2>Suggested Pokemons</h2>
      <div className='pokeSuggestion-cards-List'>
        {Array(8)
          .fill('')
          .map(e => (
            <PokeCard {...mockedData} />
          ))}
      </div>
    </div>
  );
};

export default PokeSuggestion;
