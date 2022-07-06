import Welcome from '../../components/welcome/welcome.component';
import PokeSuggestion from '../../components/pokeSuggestion/pokeSuggestion.component';

import './home.styles.scss';

const Home = () => {
  return (
    <section className='home-container'>
      <Welcome />
      <PokeSuggestion />
    </section>
  );
};

export default Home;
