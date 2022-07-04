import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './searchBox.styles.scss';

const SearchBox = () => {
  return (
    <div className='searchbox-container'>
      <div className='searchbox-icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input type='search' className='searchbox-input' />
    </div>
  );
};

export default SearchBox;
