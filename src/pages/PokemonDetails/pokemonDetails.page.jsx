import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsStart } from '../../store/details/details.slice';
import './pokemonDetails.styles.scss';

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const { pokemon } = useParams();
  const pokemonInfo = useSelector(state => state.pokemonDetails?.details);

  useEffect(() => {
    dispatch(fetchDetailsStart(pokemon));
  }, [dispatch, pokemon]);

  return <div className='details-container'>{pokemonInfo.weight}</div>;
};

export default PokemonDetails;
