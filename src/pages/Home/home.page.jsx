import Welcome from '../../components/welcome/welcome.component';
import PokemonCard from '../../components/pokemonCard/pokemonCard.component';

import './home.styles.scss';

const Home = () => {
  return (
    <section className='home-container'>
      <Welcome />
      <PokemonCard />
    </section>
  );
};

export default Home;
