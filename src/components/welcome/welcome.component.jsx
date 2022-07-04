import SearchBox from '../searchBox/searchBox.component';

import './welcome.styles.scss';

const Welcome = () => {
  return (
    <section className='welcome-container'>
      <div className='welcome-text-section'>
        <span>Welcome to</span>
        <h1 className='welcome-title'>Wiki Pokemon</h1>
        <p>
          Here you can find information about any pokemon by its name. <br />
          This web uses pokemon API "pokeapi" to get the pokemon data and show
          it in a friendly way to you. <br />
          Search any pokemon you want or see one of our suggested pokemons.
        </p>
      </div>
      <SearchBox />
    </section>
  );
};

export default Welcome;
