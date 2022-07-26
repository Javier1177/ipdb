import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDetailsStart } from '../../store/details/details.slice';
import {
  selectPokemonDetails,
  selectPokemonIsLoaded,
} from '../../store/details/details.selectors';

import SearchBox from '../../components/searchBox/searchBox.component';

import { capitalizeString, convertQuantityFrom } from '../../utils';
import './pokemonDetails.styles.scss';

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const { pokemon } = useParams();
  const pokemonInfo = useSelector(selectPokemonDetails);
  const isLoaded = useSelector(selectPokemonIsLoaded);

  useEffect(() => {
    dispatch(fetchDetailsStart(pokemon));
  }, [dispatch, pokemon]);

  return (
    <div className='pokemonDetails-container'>
      <SearchBox />
      {isLoaded ? (
        <section className='pokemonDetails-info'>
          <div className='pokemonDetails-image'>
            <img
              src={pokemonInfo.sprites?.front_default}
              alt={pokemonInfo.name}
            />
          </div>
          <div className='pokemonDetails-text'>
            <h1>{capitalizeString(pokemonInfo.name)}</h1>
            <p className='pokemonDetails-moves'>
              Moves:{' '}
              {pokemonInfo.moves?.map((move, index) => {
                if (index === pokemonInfo.moves.length - 1)
                  return ` ${capitalizeString(move.move.name)}`;
                return ` ${capitalizeString(move.move.name)},`;
              })}
            </p>
            <div className='pokemonDetails-data'>
              <ul>
                <li>
                  Height {convertQuantityFrom('dm', pokemonInfo.height)} cm
                </li>
                <li>
                  Weight {convertQuantityFrom('hg', pokemonInfo.weight)} kg
                </li>
                <li>Abilities {pokemonInfo.name}</li>
                <li>Types {pokemonInfo.name}</li>
                <li>Forms {pokemonInfo.name}</li>
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <div>Cargando muchacho</div>
      )}
    </div>
  );
};

export default PokemonDetails;
