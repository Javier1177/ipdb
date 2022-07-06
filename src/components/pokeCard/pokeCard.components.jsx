import './pokeCard.styles.scss';

const PokeCard = ({ image, name, type, height, weight }) => {
  return (
    <div className='pokeCard-container'>
      <div className='pokeCard-image'>
        <img src={image} alt='pokeImg' width='200px' height='200px' />
      </div>
      <div className='pokeCard-info'>
        <h3>{name}</h3>
        <ul>
          <li>Type: {type}</li>
          <li>Height: {height}</li>
          <li>Weight: {weight}</li>
        </ul>
        <div className='pokeCard-button-container'>
          <button className='pokeCard-button'>More</button>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
