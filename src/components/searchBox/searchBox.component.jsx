import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './searchBox.styles.scss';

const SearchBox = () => {
  return (
    <div className='searchbox-container'>
      <label className='searchbox-icon' for='search-pokemon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      <input
        type='search'
        className='searchbox-input'
        id='search-pokemon'
        spellcheck='false'
        placeholder='Search for a pokemon...'
      />
    </div>
  );
};

export default SearchBox;
