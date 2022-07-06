import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
// import { faGamepad } from '@fortawesome/free-solid-svg-icons';

import { useNavigation } from '../../../helpers/hooks';

import './header.styles.scss';

const Header = () => {
  return (
    <nav className='header-container'>
      <ul>
        <li onClick={useNavigation('/')}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
            alt='pokemon-logo'
            id='header-logo'
          />
        </li>
        <li>
          <div className='header-link' onClick={useNavigation('/wiki')}>
            <FontAwesomeIcon icon={faBook} />
            <span className='header-navegation-text'>WIKI</span>
          </div>
        </li>
        {/* <li>
          <div className='header-link' onClick={useNavigation('/game')}>
            <FontAwesomeIcon icon={faGamepad} />
            <span className='header-navegation-text'>GAME</span>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
