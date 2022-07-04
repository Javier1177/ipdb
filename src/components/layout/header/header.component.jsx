import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import './header.styles.scss';

const Header = () => {
  return (
    <nav className='header-container'>
      <ul>
        <li>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
            alt='pokemon-logo'
            id='header-logo'
          />
        </li>
        <li>
          <a href='asdaf'>
            <FontAwesomeIcon icon={faBook} />
            <span className='header-navegation-text'>WIKI</span>
          </a>
        </li>
        <li>
          <a href='ads'>
            <FontAwesomeIcon icon={faGamepad} />
            <span className='header-navegation-text'>GAME</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
