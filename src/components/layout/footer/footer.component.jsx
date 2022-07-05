import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <ul>
        <li>
          Made by <a href='https://github.com/Javier1177'>Javier López</a>
        </li>
        <li>
          <a href='https://github.com/Javier1177/ipdb'>
            <FontAwesomeIcon icon={faGithub} id='github-icon' />
            <span>Checkout out my repository in Github</span>
          </a>
        </li>
        <li>
          © Pokémon &#124; © Nintendo &#124; © Game Freak &#124; © Creatures,
          Inc
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
