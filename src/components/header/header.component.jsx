import { ReactComponent as PokeballIcon } from '../../assets/pokeball-wiki-icon.svg';
import { ReactComponent as ControllerIcon } from '../../assets/controller-game-icon.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-logo-container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
          alt='pokemon-logo'
          className='header-logo'
        />
      </div>
      <nav className='header-navegation-container'>
        <ul>
          <li>
            <PokeballIcon width={30} />
            <span className='header-navegation-text'>WIKI</span>
          </li>
          <li>
            <ControllerIcon width={40} />
            <span className='header-navegation-text'>GAME</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
